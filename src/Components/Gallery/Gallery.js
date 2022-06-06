import React from 'react';
import AllPhotos from '../AllPhotos/AllPhotos';
import './Gallery.css'

const Gallery = () => {
    return (
        <>
            <div className='gallery'>
                <div className='gallery-header'><h2 className='gallery-txt'>My Gallery</h2></div>
                <div>
                    <AllPhotos></AllPhotos>
                </div>
            </div>
        </>
    );
};

export default Gallery;