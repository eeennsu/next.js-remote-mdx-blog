import Link from 'next/link';
import type { FC } from 'react';

const NotFoundDetailPost: FC = () => {

    return (
        <div>
            The requested post does not exist.
            <Link href='/'>
                Back to home.
            </Link>
        </div>
    );
};

export default NotFoundDetailPost;