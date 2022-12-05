import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.css'

const Quizes = ({ quizes }) => {
    const { id, name, logo, total } = quizes


    return (
        <div className='container'>

            <div className=' flex md:flex-row flex-col items-center bg-slate-300 justify-between p-5 rounded-md shadow-lg  hover:shadow-violet-300 duration-500 '>
                <img className='md:w-32 w-80' src={logo} alt={name} />
                <div className="info ">
                    <p className='font-bold'>Name: {name}</p>
                    <p>Total Quiz :- {total}</p>
                    <button className='p-2 bg-violet-400 w-full rounded-md hover:bg-violet-500 duration-300 text-white'><Link to={`quiz/${id}`}>Go to Quiz</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Quizes;
