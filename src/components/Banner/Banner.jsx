import React from 'react';
import bannerBg from '../../assets/background.jpg'

const Banner = () => {
    return (
        <div>

            <div className='lg:flex justify-around items-center rounded   px-4 py-5 mt-2 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '
                style={{
                    backgroundImage: `url(${bannerBg})`,

                }}>

                {/* Banner Text */}

                <div>

                    <h1 className='lg:text-5xl text-2xl font-bold my-5'>Personal Chef &  <br />  <span className='text-red-600'>Trainer</span> </h1>
                    <p>Enjoy a personalized gourmet dining experience <br /> at the comfort of your home.</p>

                    <button className="btn btn-primary bg-gradient-to-r my-6 from-red-800 to-red-600 border-none">Book Now</button>

                </div>

                {/* Banner Carousel */}

                <div>
                    <div className="h-96 w-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item  h-full">
                            <img className='w-screen' src="https://i.pinimg.com/736x/80/f9/1e/80f91e13c595c3fa59a4b0b6d2380ffc--ken-hom-chinese-american.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-screen' src="https://kitchenchat.info/wp-content/uploads/2021/01/IMG_1404-788x1024.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-screen' src="https://i.pinimg.com/736x/d5/de/f0/d5def0834a229ce41158d79f62a3a107.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-screen' src="https://img.theepochtimes.com/assets/uploads/2019/03/22/Epoch-Times-chef-jon-zhang1.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-screen' src="https://img.tastelife.tv/assets/uploads/2020/02/Chef_Chen_Yichun_thumbnail.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-screen' src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2008/12/04/chan-yan-tak460.jpg?width=465&quality=85&dpr=1&s=none" />
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;