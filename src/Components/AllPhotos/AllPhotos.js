import React from 'react';
import { Carousel } from 'react-bootstrap';
import './AllPhotos.css'
const AllPhotos = () => {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item>
                    <img src='https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </Carousel.Item>
                
                <Carousel.Item>
                <img src="https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxhbmltYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                <img src="https://images.unsplash.com/photo-1611782712936-6247d9711816?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                <img src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                <img src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default AllPhotos;