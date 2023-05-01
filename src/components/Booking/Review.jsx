import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [onePlace, setOnePlace] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        setLoading(true);
        const place = data.find(item => item.id === id)
        setOnePlace(place)
        setLoading(false)
    }, [data, id])

    console.log(onePlace)
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <section className='w-[88%] mx-auto'>
                <div className="grid grid-cols-2 gap-2">
                    <div className="text-white">
                        <h1 className='text-7xl font-bold'>{onePlace?.title}</h1>
                        <p>{onePlace?.description}</p>
                    </div>
                    <div className="">

                    </div>
                </div>
            </section>
        </>
    );
};

export default Review;