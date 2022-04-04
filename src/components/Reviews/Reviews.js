import React from 'react';
import useReviews from '../../Hooks/Hooks';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <div>
            <h2 className='review-h2'>All Customer Reviews:({reviews.length})</h2>
            </div>
            <div className='all-reviews'>
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review={review}

                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;