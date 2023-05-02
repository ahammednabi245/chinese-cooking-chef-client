import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import banner from '../../assets/Bannerbg.png'


function ChefRecipes() {
    const [chef, setChef] = useState(null);
    const { chefId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/chef/${chefId}`)
            .then(response => response.json())
            .then(data => setChef(data))
            .catch(error => console.error(error));
    }, [chefId]);

    if (!chef) {
        return <div>Loading chef data...</div>;
    }

    return (
        <div>
            <div className='text-white flex justify-around items-center gap-3' style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "100% 100%", 
                height: "500px" 
            }}>
                <div className='w-1/2'>
                <h2 className="card-title  mt-8 mb-2">{chef.chef_name}</h2>
                    <p className='font-medium text-left my-2  text-zinc-300'>Description : {chef.description} years</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Years of Experience : {chef.experience} years</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Numbers of recipes : {chef.recipes_numbers} recipes</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Likes : {chef.likes}k</p>
                </div>
                <div className='ml-10'>
                <img className='h-80 w-80 ' src={chef.chef_img} alt="" />
                </div>
            </div>


        </div>
    );
}

export default ChefRecipes;
