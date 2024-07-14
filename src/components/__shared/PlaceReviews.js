"use client"

import React, { useEffect, useState } from 'react';

const PlaceReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        const placeId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACEID;
        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;


        try {
            const response = await fetch(url);

            console.log(response,)
            const data = await response.json();


            if (data.result && data.result.reviews) {
                setReviews(data.result.reviews);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };


    return (
        <div className='container p-40'>
            <h2>Try To Get Google Map Reviews Through API</h2>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index}>
                        <p><strong>{review.author_name}</strong>: {review.text}</p>
                        <p>Rating: {review.rating}</p>
                    </div>
                ))
            ) : (
                <p>No reviews found.</p>
            )}
        </div>
    );
};

export default PlaceReviews;
