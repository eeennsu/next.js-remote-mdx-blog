import type { FC } from 'react';

type Props = {
    id: string;
}

const Video: FC<Props> = ({ id }) => {

    return (
        <div className='aspect-w-16 aspect-h-9'>
            <iframe 
                src={`https://www.youtube.com/embed/${id}`} 
                title='Youtube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'    
            />
        </div>
    );
};

export default Video;