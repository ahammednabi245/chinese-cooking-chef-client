import React from 'react';
import Banner from '../Banner/Banner';
import ChefList from '../ChefList/ChefList';

const Home = () => {
    return (
        <div>
            <div className='text-white'>
               <Banner></Banner>
               <ChefList></ChefList>
            </div>
        </div>
    );
};

export default Home;