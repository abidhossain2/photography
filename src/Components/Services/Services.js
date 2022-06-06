import React, { useEffect, useState } from 'react';
// import { WildPhotoContext } from '../../App';
// import UseWildPhoto from '../../Hooks/UseWildPhoto';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    // const [photos, setPhotos] = useContext(WildPhotoContext)
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                setPhotos(data)
            })
    }, [setPhotos])
    return (
        <div className='service-section'>
            <h2>My Services</h2>
            <div className='services'>
                {
                    photos.map(photo=> <Service
                    key={photo.id}
                    photo={photo}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;