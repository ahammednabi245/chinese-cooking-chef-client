import React from 'react';
import image from '../../assets/KungPaoChicken-1200x800a164d79f-a427-4981-930b-371a4ad5647e.jpg'

const Banner = () => {
    return (
        <div>
            
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">

                    <img src="https://img.taste.com.au/ZYTuRN_w/taste/2019/06/slow-cooker-kung-pao-chicken-151112-1.jpg" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide3" className="btn btn-circle">❮</a>
                       <div>
                       <h1 className='text-7xl text-current font-bold'>Kung Pao Chicken</h1>
                        <p className='font-semibold my-3'>Spicy and savory Sichuan dish with diced chicken, <br /> peanuts, vegetables, and chili peppers.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Order Now</button>
                       </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/tom-yum-mixed-seafood-thick-soup-hot-pot-spicy-thai-food_1150-26563.jpg?w=740&t=st=1682966278~exp=1682966878~hmac=4a0491c106627be2d1c0b7b4f2a54d469b43e8b228906baed0c6c493e38193c1" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                       <h1 className='text-7xl text-current font-bold'>Tom Yum Mixed Seafood</h1>
                        <p className='font-semibold my-3'>A hot and sour Thai soup with mixed <br /> seafood, veggies, and spices served in a hot pot.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Order Now</button>
                       </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://asianinspirations.com.au/wp-content/uploads/2018/08/R01241_Chinese-Hot-Pot.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div>
                       <h1 className='text-7xl text-current font-bold'>Hot Pot</h1>
                        <p className='font-semibold my-3'>Chinese stew with a boiling pot of broth, <br /> raw ingredients cooked at the table.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Order Now</button>
                       </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default Banner;