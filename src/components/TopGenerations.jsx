import React from 'react';
import PhotoCard from './PhotoCard';
import { getAllData } from '@/lib/data';



const TopGenerations = async () => {
    const photos = await getAllData()
    const TopPhotos = photos.slice(1, 8)
    console.log(TopPhotos);

    return (
        <div>
            <div className=' grid grid-cols-4'> 
                {
                    TopPhotos.map((photo) => (
                        <PhotoCard key={photo.id} photo={photo} />
                    ))
                }
            </div>
        </div>
    );
};

export default TopGenerations;