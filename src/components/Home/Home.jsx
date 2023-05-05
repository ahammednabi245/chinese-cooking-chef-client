import React, { useContext, lazy, Suspense } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Banner = lazy(() => import('../Banner/Banner'));
const ChefList = lazy(() => import('../ChefList/ChefList'));
const TrendingLayout = lazy(() => import('../layout/TrendingLayout/TrendingLayout'));

const Home = () => {
    const { loading } = useContext(AuthContext);

    useTitle('Home')

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', alignItems: 'center' }}>
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <div>
            <div className='text-white'>
                <Suspense fallback={<div className='text-white ml-10'> Wait a few second data is Loading...</div>}>
                    <Banner />
                    <ChefList />
                    <TrendingLayout />
                </Suspense>
            </div>
        </div>
    );
};

export default Home;
