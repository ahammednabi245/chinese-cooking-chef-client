import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/Bannerbg.png'
import ChefRecipesCard from '../ChefRecipesCard/ChefRecipesCard';


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
        return <div>
            <div className=' flex flex-col justify-center items-center'>
                <div>

                </div>
                <div>
                    <h2 className='mb-8 font-bold text-9xl text-red-800'>
                        404
                    </h2>
                </div>
                <div>
                    <p className='text-2xl font-semibold md:text-3xl text-red-400 mb-8'>
                        Sorry, this url has no chef data
                    </p>
                </div>

                <div>
                    <Link to='/' className='btn bg-gradient-to-r from-red-800 to-red-600 border-none'>BACK TO HOME</Link>
                </div>
            </div>
        </div>;
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
                    <p className='font-medium text-left my-2  text-zinc-300'>Description : {chef.description}</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Likes : {chef.likes}k</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Numbers of recipes : {chef.recipes_numbers} recipes</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Years of Experience : {chef.experience} years</p>


                </div>
                <div className='ml-10'>
                    <img className='h-80 w-80 ' src={chef.chef_img} alt="" />
                </div>

            </div>

            <ChefRecipesCard></ChefRecipesCard>

        </div>
    );
}

export default ChefRecipes;
