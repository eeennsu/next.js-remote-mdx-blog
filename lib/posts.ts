// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { remark } from 'remark';
// import html from 'remark-html';

// const postsDirectory = path.join(process.cwd(), 'blogPosts');

// export const getSortedPostsData = () => {
//     // 파일 이름을 불러옴
//     const fileNames = fs.readdirSync(postsDirectory);
//     const allPostsData: BlogPost[] = fileNames.map((fileName) => {
//         // md 확장자를 지움
//         const id = fileName.replace(/\.md/, '');
        
//         // 마크다운 파일을 문자열로 읽음
//         const fullPath = path.join(postsDirectory, fileName);
//         const fileContents = fs.readFileSync(fullPath, 'utf8');

//         // matter를 이용해 메타데이터를 파싱함
//         const mattherResult = matter(fileContents);

//         const blogPosts: BlogPost = {
//             id,
//             title: mattherResult.data.title,
//             date: mattherResult.data.date,
//         };

//         return blogPosts;
//     }); 

//     const sortedPostsData = allPostsData.sort((prev, cur) => prev.date < cur.date ? 1 : -1);

//     return sortedPostsData;
// }

// export const getPostData = async (postId: string) => {
//     // 파일 이름을 불러옴
//     const fullPath = path.join(postsDirectory, `${postId}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     const matterResult = matter(fileContents);

//     const processedContent = await remark()
//         .use(html)
//         .process(matterResult.content);

//     const contentHtml = processedContent.toString();

//     const blogPostWithHTML: BlogPost & { contentHtml: string } = {
//         id: postId,
//         title: matterResult.data.title,
//         date: matterResult.data.date,
//         contentHtml
//     };

//     return blogPostWithHTML;
// }

import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeSlug from 'rehype-slug';                                // Rehype는 HTML을 변환하고 조작하는 데 사용되는 프러그인 기반의 HTML 프로세서
import Video from '@/features/Video/Video';
import CustomImage from '@/features/Image/CustomImage';

type Filetree = {
    'tree': [{ 'path': string }]
}

export const getPostsMeta = async (): Promise<Meta[] | undefined> => {
    const response = await fetch('https://api.github.com/repos/eeennsu/nextjs-example-blog-posts/git/trees/main?recursive=1',
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-Github-Api-Version': '2022-11-28'
            }
        }
    );

    if (!response.ok) {
        return undefined;
    }

    const repoFiletree: Filetree = await response.json();

    const filesArr = repoFiletree.tree.map((obj) => obj.path).filter(path => path.endsWith('.mdx'));

    const posts: Meta[] = [];

    for(let file of filesArr) {
        const post = await getPostByName(file);

        if (post) {
            posts.push(post.meta);
        }
    }

    const sortedPosts: Meta[] = posts.sort((prev, cur) => prev.date < cur.date ? 1 : -1);

    return sortedPosts;
}

export const getPostByName = async (fileName: string): Promise<BlogPost | undefined> => {
    const response = await fetch(`https://raw.githubusercontent.com/eeennsu/nextjs-example-blog-posts/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api_version': '2022-11-28'
        }
    });

    if (!response.ok) {
        return undefined;
    }

    const rawMDX = await response.text();

    if (rawMDX === '404: Not Found') return undefined;

    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({
        source: rawMDX,
        components: {
            Video,
            CustomImage
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }]
                ]
            }
        }
    });

    const id = fileName.replace(/\.mdx$/, '');

    const blogPostObj: BlogPost = {
        meta: {
            id,
            title: frontmatter.title,
            date: frontmatter.date,
            tags: frontmatter.tags
        },
        content
    };

    return blogPostObj;
}