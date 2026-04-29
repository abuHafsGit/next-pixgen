import { getAllData } from '@/lib/data';
import React from 'react';

const ImageDetailsPage =async ({params}) => {
    const {id}=await params;
    const photos=await getAllData();
    const photoDetails=photos.find((p)=>p.id==id);
    console.log('photodetails',photoDetails)
    return (
        <div>
            <p>{photoDetails.title}</p>
        </div>
    );
};

export default ImageDetailsPage;