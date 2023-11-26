import type { FC } from 'react';
import Link from 'next/link';
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa';

const Header: FC = () => {

    return (
        <header>
            <nav className='sticky top-0 z-10 p-4 bg-slate-600 drop-shadow-xl'>
                <div className='flex flex-col justify-between mx-auto prose prose-xl sm:flex-row'>
                   <h1 className='text-3xl font-bold grid place-content-center mb-2 md:mb-0'>
                        <Link href='/' className='no-underline text-white/90 hover:text-white'>
                            Eunsu
                        </Link>
                   </h1>
                   <div className='flex justify-center sm:justify-evenly gap-4 text-2xl sm:text-3xl'>
                        <Link href='/' className='text-gray-200 hover:text-white'>
                            <FaYoutube />
                        </Link>
                        <Link href='/' className='text-gray-200 hover:text-white'>
                            <FaTwitter />
                        </Link>
                        <Link href='/' className='text-gray-200 hover:text-white'>
                            <FaGithub />
                        </Link>
                        <Link href='/' className='text-gray-200 hover:text-white'>
                            <FaLaptop />
                        </Link>
                   </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;