import PhotoCard from '@/components/PhotoCard';
import { getAllData } from '@/lib/data';
import React from 'react';

const AllPhotos = async() => {
const photos=await getAllData();

    return (
        <div>
            <div className=' grid grid-cols-4'>
               {
                photos.map((photo)=>(
                     <PhotoCard key={photo.id} photo={photo}/>
                ))
               }
            </div>
        </div>
    );
};

export default AllPhotos;