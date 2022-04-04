import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>No data found on this page</h2>
            <p><span className='error'>404</span></p>
            <h4>Try again please, error '404'</h4>
        </div>
    );
};

export default NotFound;