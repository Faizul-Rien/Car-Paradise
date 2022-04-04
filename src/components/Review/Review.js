import React from 'react';
import './Review.css';

const Review = ({review,rivs}) => {
    const {name,rev,rating} = review;
    return (
        <div className='review-cart'>
            <h2>Name:{name}</h2>
            <p>Review:{rev}</p>
            <p>Ratings:{rating}</p>
        </div>
    );
};

export default Review;