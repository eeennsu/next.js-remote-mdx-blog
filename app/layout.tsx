import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/features/Layout/Header';

const inter = Inter({ subsets: ['latin'] })

const RootLayout: FC<PropsWithChildren> = ({ children }) => {

    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='flex flex-col min-h-screen dark:bg-slate-800'>
                    <Header />                
                    <main className='flex flex-col flex-1 w-full mx-auto prose prose-xl max-w-7xl prose-slate dark:prose-invert'>
                        {children}
                    </main>                           
                </div>
            </body>
        </html>
    );
}

export default RootLayout;

export const metadata: Metadata = {
    title: 'Next App Blog Toy',
    description: 'This is blog app made by eunsu.'
}