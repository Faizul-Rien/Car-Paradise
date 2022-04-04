import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {
    const {name,rev,rating} = props.review;
    return (
        <div className='review-cart'>
            <h2>Name:<span className='h2-span'>{name}</span></h2>
            <p className='rev'><span className='rev-span'>Review: </span>{rev}</p>
            <p className='ratings'> <span className='rating-span'>Ratings:</span> {rating} <span className='star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span></p>
        </div>
    );
};

export default Review;