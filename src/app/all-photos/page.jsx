import PhotoCard from '@/components/PhotoCard';
import { getAllData } from '@/lilb/data';
import React from 'react';

const AllPhotos = async() => {
const photos=await getAllData();

    return (
        <div>
            <div>
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