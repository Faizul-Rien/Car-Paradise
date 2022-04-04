import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div >
            <h2 className='about-h2'>COMPANY OF <span>CARS</span> <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
    </h2>
            <p className='about-us'>Although the facility, our inventory, and the host of services we offer to our clients may have evolved over the years we are still committed to the same values that have helped us find so much success, and make so many friends along the way. At Company of Cars we believe that buying a car should be fun! We believe that our sales and service staff should be informed, and helpful, without being pushy or overbearing. We want you to be our customer for life and we work hard to earn your business each and every time we interact with you.</p>
        </div>
    );
};

export default About;