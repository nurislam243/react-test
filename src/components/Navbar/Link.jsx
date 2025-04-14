import React from 'react';

const link = ({route}) => {
    return (
        <li  className='cursor-pointer '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default link;