import React from 'react';
import { Link } from 'react-router-dom';

const ChefListCard = ({ chef }) => {
    return (
        <div>

            {/* Chefs Card */}

            <div className=" w-full h-full border py-6 px-12 rounded-lg ">
                <div>
                    <img className='h-80 w-60' src={chef.chef_img} alt="" />
                </div>
                <div>
                    <h2 className="card-title  mt-8 mb-2">{chef.chef_name}</h2>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Years of Experience : {chef.experience} years</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Numbers of recipes : {chef.recipes_numbers} recipes</p>
                    <p className='font-medium text-left my-2 text-lg text-zinc-300'>Likes : {chef.likes}k</p>
                </div>

                {/* view recipe button */}

                <Link to={`/chef/${chef.id}`}>
                    <button className="btn w-40 text-lg btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">
                        View Recipes</button>
                </Link>




            </div>
        </div>

    );
};

export default ChefListCard;