import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
    <p className='flex text-teal-600 mt-4'><CircleCheckBig className='text-green-600 mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeature;