import React, { useEffect, useState } from 'react';
import ChefListCard from '../ChefListCard/ChefListCard';

const ChefList = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <div>
                <div className='mt-16 mb-3 flex justify-center items-center p-3'>
                    <h1 className='text-center text-6xl font-semibold border rounded w-48 h-20'>Chefs</h1>
                </div>
                <div className='grid gap-6 mb-4 lg:grid-cols-3 sm:grid-cols-2 p-10'>
                    {
                        chefs.map(chef => <ChefListCard
                            key={chef.id}
                            chef={chef}
                        ></ChefListCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefList;