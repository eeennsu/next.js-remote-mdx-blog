import { getFormattedDate } from '@/lib/getFormattingDate';
import Link from 'next/link';
import type { FC } from 'react';

type Props = {
    post: Meta
}

const Post: FC<Props> = ({ post: { id, title, date } }) => {
    
    return (
        <li>
            <h2 className='text-2xl underline'>
                <Link href={`/post/${id}`}>
                    {title}
                </Link>
            </h2>
            <div>
                {getFormattedDate(date)}
            </div>
        </li>
    );
};

export default Post;