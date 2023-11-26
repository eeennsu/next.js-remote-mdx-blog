import Post from '@/features/Post/Post';
import { getPostByName, getPostsMeta } from '@/lib/posts';
import type { Metadata, NextPage } from 'next';

type Props = {
    params: {
        tag: string;
    }
}

const Index: NextPage<Props> = async ({ params: { tag } }) => {

    const posts = await getPostsMeta();         // deduped!

    if (!posts) {
        return (
            <p className='mt-10 text-center'>
                Sorry, no posts
            </p>
        )
    }

    const tagPosts = posts.filter((post) => post.tags.includes(tag));

    return (
        <div className='w-full max-w-3xl mx-auto'>
            {
                tagPosts.length >= 1 ? (
                   <>
                        <h2 className='w-full'>
                            Result for : #{tag}
                        </h2>
                        <section className='w-full max-w-xl mx-auto'>
                            <ul className='w-full'>
                                {
                                    tagPosts.map((post) => (
                                        <Post key={post.id} post={post} />
                                    ))
                                }
                            </ul>
                        </section>
                   </>
                ) : (
                    <div className='text-center'>
                        Sorry, no posts for that keyward #{ tag }
                    </div>
                )
            }
        </div>
    );
};

export default Index;



export const generateStaticParams = async (): Promise<Array<{ tag: string }>> => {
    const posts = await getPostsMeta();     // deduped!

    if (!posts) return [];

    // flat은 중첩된 배열을 평탄화 해주는 함수
    // 중복을 제거한 태그 목록을 생성한다
    const tagsSet = new Set(posts.map((post) => post.tags).flat());

    return Array.from(tagsSet).map((tag) => ({ tag }));
}

export const generateMetadata = async ({ params: { tag } }: Props): Promise<Metadata> => {

    if (!tag) {
        return {
            title: `Tag not founded.`
        };
    }

    return {
        title: `Posts about ${tag}`
    };
}

export const revalidate = 86400;