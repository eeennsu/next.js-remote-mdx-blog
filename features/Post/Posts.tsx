import { FC } from 'react';
import { getPostsMeta } from '@/lib/posts';
import Post from './Post';

const Posts: FC = async () => {

    const posts = await getPostsMeta();

    if (!posts) {
        return (
            <p className='mt-10 text-center'>
                Sorry, no posts avaliable.
            </p>
        )
    }

    return (
        <section className='mt-6 mx-auto max-w-2xl'>
            <h2 className='text-4xl font-bold '>
                Blog
            </h2>
            <ul className='w-full flex flex-col'>
                {
                    posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))
                }
            </ul>
        </section>
    );
}

export default Posts;