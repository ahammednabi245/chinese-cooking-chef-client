import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/Bannerbg.png'
import ChefRecipesCard from '../ChefRecipesCard/ChefRecipesCard';
import useTitle from '../../hooks/useTitle';


function ChefRecipe() {
    const [chef, setChef] = useState(null);
    const { chefId } = useParams();
    useTitle('Chef Recipes')

    useEffect(() => {
        fetch(`https://chinese-cafe-server-ahammednabi245.vercel.app/chef/${chefId}`)
            .then(response => response.json())
            .then(data => setChef(data))
            .catch(error => console.error(error));
    }, [chefId]);

    if (!chef) {
        return <div>

        </div>;
    }

    return (
        <div>

            {/* Chef Banner and her description section */}

            <div className='text-white flex justify-around items-center gap-3' style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "100% 100%",
                height: "500px"
            }}>
                <div className='w-1/2'>
                    <h2 className="card-title  mt-8 mb-2">{chef.chef_name}</h2>
                    <p className='font-medium text-left my-2  text-zinc-300'>Description : {chef.description}</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Likes : {chef.likes}k</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Numbers of recipes : {chef.recipes_numbers} recipes</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Years of Experience : {chef.experience} years</p>


                </div>
                <div className='ml-10'>
                    <img className='h-80 w-80 ' src={chef.chef_img} alt="" />
                </div>

            </div>

            {/* Chef Recipe Components */}

            <ChefRecipesCard></ChefRecipesCard>

        </div>
    );
}

export default ChefRecipe;
