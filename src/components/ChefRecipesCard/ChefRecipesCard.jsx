import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ChefRecipesCard.css'
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ChefRecipesCard = () => {
    const [chef, setChef] = useState(null);
    const [favoriteButtonClicked1, setFavoriteButtonClicked1] = useState(false);
    const [favoriteButtonClicked2, setFavoriteButtonClicked2] = useState(false);
    const [favoriteButtonClicked3, setFavoriteButtonClicked3] = useState(false);
    const { chefId } = useParams();
    const notify = () => toast.success("This Recipe Is My Favorite!");

    useEffect(() => {
        fetch(`https://chinese-cafe-server-ahammednabi245.vercel.app/chef/${chefId}`)
            .then(response => response.json())
            .then(data => setChef(data))
            .catch(error => console.error(error));
    }, [chefId]);

    if (!chef) {
        return <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', alignItems: 'center' }}>
                <div className="spinner" ></div>
            </div>
        </div>;
    }
    return (
        <div>
            <div className='mt-16 mb-3 flex justify-center items-center p-3'>
                <h1 className=' text-white text-center text-6xl font-semibold border rounded w-4/12 h-28 p-5 border-red-600'>Chef Recipes</h1>
            </div>

            {/* First Recipe Card */}

            <div className="card card-side text-white border  m-8">
                <figure className=' w-2/5 '><img className='rounded-lg h-screen ' src={chef.recipe_img1} alt="" /></figure>
                <div className="w-4/5 ml-5 p-4">
                    <h2 className="card-title my-3">{chef.recipe_name1}</h2>
                    <ul className='text-justify '>
                        <span className='text-lg font-medium'><u>Ingredients:</u></span>
                        {chef.recipe_ingredients1.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <p className='text-justify my-3'><span className='text-lg font-medium'><u>Cooking Method:</u></span> {chef.recipe_cooking_method1}</p>
                    <p className='flex gap-2 my-3'>
                        Ratings: <Rating
                            placeholderRating={chef.rating1}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-red-600 '></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            className='text-xl' /></p>

                    <div className="card-actions justify-end">
                        <button onClick={() => { setFavoriteButtonClicked1(true); notify(); }}
                            className="btn bg-gradient-to-r from-red-800 to-red-600
                         border-none"disabled={favoriteButtonClicked1} >Favorite</button>

                        <ToastContainer />
                    </div>
                </div>
            </div>

            {/* Second Recipe Card */}

            <div className="card card-side text-white border  m-8">
                <figure className=' w-2/5 '><img className='rounded-lg h-screen ' src={chef.recipe_img2} alt="" /></figure>
                <div className="w-4/5 ml-5 p-4">
                    <h2 className="card-title my-3">{chef.recipe_name2}</h2>
                    <ul className='text-justify '>
                        <span className='text-lg font-medium'><u>Ingredients:</u></span>
                        {chef.recipe_ingredients2.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className='text-justify my-3'><span className='text-lg font-medium'><u>Cooking Method:</u></span> {chef.recipe_cooking_method1}</p>
                    <p className='flex gap-2 my-3'>
                        Ratings: <Rating
                            placeholderRating={chef.rating2}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-red-600 '></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            className='text-xl' /></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => { setFavoriteButtonClicked2(true); notify(); }} disabled={favoriteButtonClicked2} className="btn bg-gradient-to-r from-red-800 to-red-600 border-none">Favorite</button>
                    </div>
                </div>
            </div>

            {/* Third Recipe Card */}

            <div className="card card-side text-white border  m-8">
                <figure className=' w-2/5 '><img className='rounded-lg h-screen ' src={chef.recipe_img3} alt="" /></figure>
                <div className="w-4/5 ml-5 p-4">
                    <h2 className="card-title my-3">{chef.recipe_name3}</h2>
                    <ul className='text-justify '>
                        <span className='text-lg font-medium'><u>Ingredients:</u></span>
                        {chef.recipe_ingredients3.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className='text-justify my-3'><span className='text-lg font-medium'><u>Cooking Method:</u></span> {chef.recipe_cooking_method3}</p>
                    <p className='flex gap-2 my-3'>
                        Ratings: <Rating
                            placeholderRating={chef.rating3}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-red-600 '></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            className='text-xl' /></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => { setFavoriteButtonClicked3(true); notify(); }} disabled={favoriteButtonClicked3} className="btn bg-gradient-to-r from-red-800 to-red-600 border-none">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipesCard;