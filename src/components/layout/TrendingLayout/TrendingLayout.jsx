import React from 'react';
import WeeklyOffer from '../WeeklyOffer/WeeklyOffer';
import News from '../News/News';
import Feedback from '../Feedback/Feedback';

const TrendingLayout = () => {
    return (
        <div>
            <div className='grid gap-6 mb-4 lg:grid-cols-2 sm:grid-cols-2 p-10'>
                <WeeklyOffer></WeeklyOffer>
                <News></News>
                
            </div>
            <div>
                <Feedback></Feedback>
            </div>
        </div>
    );
};

export default TrendingLayout;