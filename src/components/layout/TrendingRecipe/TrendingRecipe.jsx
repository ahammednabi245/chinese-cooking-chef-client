import React from 'react';

const TrendingRecipe = () => {
    return (
        <div>

            {/* Trending Recipe Details */}

            <div className='text-white'>
                <div className="card card-side text-white border  m-8">
                    <figure className=' '><img className='rounded-lg h-screen' src="https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Cantonese-char-siu-0b0df03.jpg" alt="" /></figure>
                    <div className="w-4/5 ml-5 p-4">
                        <h2 className="card-title my-3">Cantonese Char Siu</h2>
                        <p className='text-justify '> <span className='text-lg font-medium'><u>About Recipe:</u></span> Cantonese Char Siu is a popular dish in Cantonese cuisine, featuring tender, juicy barbecued pork with a sweet and savory flavor. The pork is typically marinated in a mixture of soy sauce, hoisin sauce, honey, and Chinese five-spice powder before being roasted until the outside is caramelized and slightly charred. Char Siu is commonly served sliced and garnished with green onions or sesame seeds, and is often enjoyed with rice or noodles. It is a beloved dish in Cantonese cuisine and can be found in many restaurants and street food vendors across the region.</p>
                        <p className='text-justify '><span className='text-lg font-medium'><u>Ingredients:</u></span>1 lb pork shoulder or pork belly, sliced into strips
                            2 tbsp soy sauce
                            2 tbsp hoisin sauce
                            2 tbsp honey
                            1 tsp Chinese five-spice powder
                            1 tsp sesame oil
                            1 tsp rice wine
                            Red food coloring (optional)
                            Sliced green onions and sesame seeds for garnish</p>
                        <p className='text-justify my-3'><span className='text-lg font-medium'><u>Cooking Method:</u></span> In a bowl, mix together the soy sauce, hoisin sauce, honey, Chinese five-spice powder, sesame oil, rice wine, and red food coloring (if using).
                            Add the pork strips to the marinade and coat them evenly. Cover the bowl and refrigerate for at least 2 hours, or overnight.
                            Preheat your oven to 375°F (190°C).
                            Line a baking sheet with parchment paper and place the pork strips on top.
                            Bake for 25-30 minutes, or until the pork is cooked through and slightly charred on the outside.
                            Let the pork rest for a few minutes before slicing it into thin strips.
                            Garnish with sliced green onions and sesame seeds, and serve with rice or noodles.
                            Note: If you have a barbecue grill, you can also grill the pork over charcoal for an even more authentic flavor.</p>
                        <p className='text-justify my-3'>Ratings: 4.5</p>
                        <div className="card-actions justify-end">
                            <h2 className="card-title my-3"> <span className='text-lg font-medium'><u>Made By:</u></span>Chef Martin Yan</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingRecipe;