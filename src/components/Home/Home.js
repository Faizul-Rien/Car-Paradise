import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/Hooks';
import img from '../../images/car.png';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
       <div>
            <div className='home-container'>
            <div className='home-img'>
                <img src={img} alt="" />
            </div>
            <div className='home-info'>
                <h1 className='info-h1'>The joy of best Best Ride</h1>
                <h1><spam className='info-spam'>Always there for you</spam></h1>
                <p className='info-p'>“Strive for perfection in everything you do. Take the best that exists and make it better. When it does not exist, design it.” This sentence by Henry Royce, who founded the company together with Charles Rolls, is the brand's motto, which is still valid today.</p>
                <button className='info-btn' >More Information</button>
            </div>
            
        </div>
        <div className='customer-review'>
            <h1>Customer Reviews:{reviews.length}</h1>
            <div className='review-card'>
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review={review}
                    
                    ></Review>)
                }
            </div>
            <div className='review-btn'>
            <Link to='/reviews'>See All Reviews</Link>
            </div>
            
        </div>
       </div>

    );
};

export default Home;