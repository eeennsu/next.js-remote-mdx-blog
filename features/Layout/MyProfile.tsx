import Image from 'next/image';
import type { FC } from 'react';

const MyProfile: FC = () => {

    return (
        <section className='w-full mx-auto'>
            <Image className='border-4 border-slate-600 drop-shadow-xl rounded-full mx-auto mt-7 bg-white' src='/img/cat.png' width={200} height={200} alt='my profile' priority />
        </section>
    );
};

export default MyProfile;