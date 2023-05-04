import React from 'react';
import { Link } from 'react-router-dom';

const WeeklyOffer = () => {
    return (
        <div>
            <div>

                {/* Trending Recipe Short card */}

                <div>
                    <h1 className='text-5xl font-semibold underline decoration-wavy underline-offset-8 decoration-1'><span className='text-red-500'>Weekly</span> Trending Recipes</h1>
                </div>
                <div>
                    <div className=" lg:flex justify-between glass mt-12">
                        <div className='lg:w-1/3 '>
                            <figure className='lg:mt-8 lg:ml-4 sm:mt-16'><img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Cantonese-char-siu-0b0df03.jpg" alt="" /></figure>
                        </div>
                        <div className="card-body lg:w-2/3">
                            <h2 className="text-2xl font-bold text-red-400">Cantonese Char Siu</h2>
                            <p className='text-justify'>Cantonese Char Siu is a popular dish in Cantonese cuisine, featuring tender, juicy barbecued pork with a sweet and savory flavor. The pork is typically marinated in a mixture of soy sauce, hoisin sauce......... </p>
                            <div className="card-actions justify-center">

                                <Link to='/trending'>
                                    <button className="btn bg-gradient-to-r from-red-800 to-red-600 border-none">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyOffer;