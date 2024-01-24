import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ shows }) => {
  return (
    <div className='flex flex-col   bg-teal-200'>
      {shows.map((show) => (

        <div key={show.show.id} className=' flex flex-row items-center  
        hover:scale-105 transition duration-300 ease-in gap-3 p-4 my-2 mx-20 rounded-xl outline bg-orange-300'>

          <h3 className='flex items-center justify-center mx-auto text-fuchsia-950 text-2xl font-bold font-serif bg-rose-300 rounded-lg m-2 p-5'>{show.show.name}</h3>

          <h3 className='flex items-center justify-center font-serif mx-auto text-xl text-green-950 font-medium bg-rose-300 rounded-lg m-2 p-5'>Language: {show.show.language}</h3>

          <Link to={`/show/${show.show.id}`} >

            <button className="text-red-800 font-serif bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3 font-medium text lg">Summary</button>

          </Link>

        </div>
      ))}
    </div>
  );
};

export default Card;
