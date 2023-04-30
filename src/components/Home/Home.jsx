import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Home = () => {
    const [travelDestinations, setTravelDestinations] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setTravelDestinations(data)
                setLoading(false)
            })
    }, [])
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const activeDestination = travelDestinations[activeSlideIndex];
    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex);
    };
    if (loading) {
        return <h1>Loading....</h1>
    }
    return (
        <>
            <div className='grid mt-16 gap-2 w-[90%] mx-auto grid-cols-2'>
                {/* Details Part */}
                <div className="text-white flex justify-center items-start flex-col">
                    <h1 className='text-7xl font-bold'>{activeDestination.title}</h1>
                    <p className='my-3'>{activeDestination?.description.slice(0, 200)}...</p>
                    <button className='inline-flex items-center gap-3 bg-primary px-6 py-2 rounded'>Booking <AiOutlineArrowRight /></button>
                </div>
                <div className="">
                    <Swiper
                        effect={"coverflow"}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                            loop: true
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                        onSlideChange={handleSlideChange}
                        navigation={true}
                    >
                        {travelDestinations.map((destination, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <div className={`relative ${isActive && 'border-[5px]'} border-primary h-[500px]  rounded-xl w-full bg-cover bg-center`}>
                                        <img src={destination?.image} alt={destination?.title} className='w-full h-full object-cover' />
                                        <div className='absolute top-72 left-10  flex flex-col items-center justify-center text-white text-center  transition-opacity duration-300'>
                                            <h2 className='text-4xl font-bold'>{destination?.title}</h2>
                                        </div>
                                    </div>
                                )}

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
       
        </>
    );
};



export default Home;