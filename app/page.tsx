import type { NextPage } from 'next';
import Posts from '@/features/Post/Posts';
import MyProfile from '@/features/Layout/MyProfile';

const Home: NextPage = () => {
    
    return (
        <>
            <MyProfile />
            <h1 className='mt-10 text-2xl'>
                <p className='text-center'>Hello and Welcome 🖐️ I&apos;
                    <span className='font-bold'>Eunsu!</span>
                </p>
            </h1>
            <Posts />
        </>       
    );
}

export default Home;



// 배포할 경우 하루로 설정해도 될 만큼 해도 괜찮다.
export const revalidate = 86400;