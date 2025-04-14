import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-600 p-4 rounded-2xl'>
            {/* Card Header */}
            <div className="">
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>

            {/* Card Body */}
            <div className="bg-amber-400 p-4 flex-1 rounded-2xl mt-10">
                <p>{description}</p>
                <div className="">
                    {
                        features.map((feature , index) => <PricingFeature 
                        key={index}
                        feature={feature}></PricingFeature>)
                    }
                </div>

            </div>
            <button className="btn w-full mt-4">Wide</button>
        </div>
    );
};

export default PricingCard;