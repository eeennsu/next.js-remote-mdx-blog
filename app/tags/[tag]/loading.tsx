import type { FC } from 'react';

const loading: FC = () => {

    return (
        <div className='w-full max-w-3xl mx-auto'>  
            <h2 className='flex items-center gap-4'>
                Result for :  <span className='inline-block h-10 rounded-sm w-28 bg-slate-300 animate-pulse' />
            </h2>              
            <section className='w-screen max-w-2xl mx-auto'>
                <ul className='flex flex-col w-full gap-1 list-none'>
                    {
                        Array(5).fill('').map((_, i) => (
                            <Skeleton key={i} />
                        ))
                    }
                </ul>
            </section>              
        </div>
    );
};

export default loading;



const Skeleton: FC = () => {

    return (
        <li className='w-full h-24 bg-gray-400 animate-pulse' />
    )
}