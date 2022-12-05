import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='header'>
            <h1>QUIZ MASTER</h1>
            <div className='pt-2 shadow-lg hover:shadow-fuchsia-100 duration-300'>
                <div className="mr-5 h-8 w-8 text-violet-700 md:hidden z-50" onClick={() => setOpen(!open)}>

                    {
                        open ? <XMarkIcon /> : <Bars3Icon />

                    }

                </div>
                <div className={` md:flex justify-center absolute md:static   ${open ? " inset-x-40 bg-slate-800   w-1/2 absolute z-10 h-screen flex-col flex px-20 text-center   " : " -inset-x-96   w-2/4"} text-start  duration-300 ease-in md:sticky `}>
                    <NavLink className="links" to="/" end>Home</NavLink>
                    <NavLink className="links" to="/blog" end>Blog</NavLink>
                    <NavLink className="links" to="/staticks" end>Staticks</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;