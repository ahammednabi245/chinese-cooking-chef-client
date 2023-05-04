import React from 'react';

const News = () => {
    return (
        <div>

            {/* News and event section */}

            <div>
                <h1 className='text-5xl font-semibold underline decoration-wavy underline-offset-8 decoration-1'> <span className='text-red-500'>News</span> and Events</h1>
            </div>
            <div className='mt-12 text-left'>
                <div>
                    <h3 className='mt-3 card-title text-red-400'>Best Bread pairing for Barbeque?</h3>
                    <p className='mt-3'>Quis sed mid elit, risus aliquet placerat. Pid et, vel phasellus augue a ultrices, natoque sociis porta proin nec? Dictumst magna rhoncus quis diam! Nascetur non risus elit pellentesque mauris pulvinar purus tincidunt, ac urna, placerat mus porta, egestas ultrices turpis......</p>
                </div>
                <hr className='mt-3' />
                <div>
                    <h3 className='my-3 card-title text-red-400'>Baking Question?</h3>
                    <p>Phasellus porta rhoncus dis mauris magna risus proin nec scelerisque ultrices parturient porta nisi lectus. Integer tincidunt, dolor amet? Risus hac turpis ac sagittis mattis......</p>
                </div>
            </div>
        </div>
    );
};

export default News;