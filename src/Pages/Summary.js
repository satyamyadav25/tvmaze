import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Summary = ({shows}) => {
  
  const location = useLocation();
  const id = location.pathname.split("/").at(-1)
  const details = shows.filter((show) => {
        return  show.show.id === parseInt(id);
        })
     console.log(details);
     console.log(id);
     function stripHtmlTags(input) {
      return input.replace(/<[^>]*>/g, '');
  }

  return (
    <div> 

          <h1 className='flex justify-center py-4 font-serif font-extrabold  text-green-800  text-4xl bg-slate-400'>Summary</h1>

          <div>

          {details.map((show) => (

                  <h3 className='flex items-center justify-center m-10 text-red-800 text-3xl '>{stripHtmlTags(show.show.summary)}</h3>

           ))}

          </div>

          <div className='flex justify-center items-center '>

          <Link to={`/form/`} >

            <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full m-10 p-5 font-sans font-bold text-xl">Book Movie Ticket</button>

          </Link>

          </div>
    </div>
  );
};

export default Summary;
