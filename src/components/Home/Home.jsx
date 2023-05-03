import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import ChefList from '../ChefList/ChefList';
import { AuthContext } from '../providers/AuthProvider';
import TrendingLayout from '../layout/TrendingLayout/TrendingLayout';


const Home = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', alignItems: 'center' }}>
            <div className="spinner" ></div>
        </div>

    }

    return (
        <div>
            <div className='text-white'>
               <Banner></Banner>
               <ChefList></ChefList>
               <TrendingLayout></TrendingLayout>
            </div>
        </div>
    );
};

export default Home;