import type { Metadata, NextPage } from 'next';
import { getFormattedDate } from '@/lib/getFormattingDate';
import { getPostsMeta, getPostByName } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import 'highlight.js/styles/github-dark.css';

type Props = {
    params: {
        postId: string;
    }
}

const DetailPost: NextPage<Props> = async ({ params: { postId } }) => {

    const post = await getPostByName(`${postId}.mdx`);
    
    if (!post) return notFound();
    
    const { meta: { title, date, tags: _tags }, content } = post;

    return (
        <article className='px-6 mx-auto prose prose-xl prose-slate'>
            <h2 className='mt-4 mb-0 text-3xl'>
                {title}
            </h2>
            <p className='mt-2'>
                {getFormattedDate(date)}
            </p>
            <section>
                {content}
            </section>
            <section>
                <h3>Related:</h3>
                <div className='flex gap-4'>
                    {
                        _tags.map((tag, i) => (
                            <Link key={i} href={`/tags/${tag}`}>
                                {tag}
                            </Link>
                        ))
                    }
                </div>
            </section>
            <p className='text-white'>
                <Link href='/'>
                    Back to home
                </Link>
            </p>
        </article>
    );
};

export default DetailPost;



export const generateMetadata = async ({ params: { postId } }: Props): Promise<Metadata> => {

    const post = await getPostByName(`${postId}.mdx`);          // deduped!

    if (!post) {
        return {
            title: 'Post not found'
        };
    }

    return {
        title: `${post.meta.title}`,
        description: `이 페이지는 ${post.meta.date}에 만들어진 포스트입니다`
    };
}

// revalidate = 0과 같이 사용하면 안된다!
export const generateStaticParams = async () => {
    const posts = await getPostsMeta();         // deduped!
    
    if (!posts) return [];

    return posts.map((post) => ({
        postId: post.id
    }));
}

export const revalidate = 86400;