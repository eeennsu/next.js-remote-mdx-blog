'use client'

import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

type Props = {
    error: Error;
    reset: () => void;
}

const Error: NextPage<Props> = ({ error, reset }) => {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className='bg-slate-200 mx-auto max-w-lg py-1 px-4 w-full h-full'>
            <h2 className='my-4 text-2xl font-bold'>
                Something Went wrong!
            </h2>
            <button className='mb-4 p-4 bg-red-500 text-white rounded-xl' onClick={() => reset()}>
                Try Again
            </button>
            <p className='text-xl'>
                Or go back to <Link href='/'>Home</Link>
            </p>
        </div>
    );
};

export default Error;