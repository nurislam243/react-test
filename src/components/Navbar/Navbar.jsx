import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';



const navigationData = [
    {
      id: 1,
      url: "/home",
      name: "Home"
    },
    {
      id: 2,
      url: "/about",
      name: "About Us"
    },
    {
      id: 3,
      url: "/services",
      name: "Services"
    },
    {
      id: 4,
      url: "/contact",
      name: "Contact"
    },
    {
      id: 5,
      url: "/blog",
      name: "Blog"
    }
  ];
  

const Navbar = () => {
    
    const [menu, setMenu] = useState(true);

    const handleMenu =()=>{
        setMenu(!menu);
    }

    return (
        <nav className='flex justify-between px-10 py-10 border-amber-200 border'>
            <h3 className='text-3xl uppercase'><span className='text-blue-800'>Navbar</span></h3>
            <ul className=' justify-between min-w-[500px] hidden md:flex items-center'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
                
            </ul>
            <div className="flex items-center gap-3 text-2xl">
                <h3>sign</h3>
                <h3 className='text-teal-500'>login</h3>
                <div className="md:hidden">
                    <h3 onClick={handleMenu} className='cursor-pointer text-4xl'>{menu ? <Menu></Menu>: <X></X>}</h3>
                </div>
                
            </div>


            <ul className={`absolute md:hidden w-full mr-12 ${menu ? '-mt-60' : 'mt-20'} duration-1000`}>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
        
    );
};

export default Navbar;