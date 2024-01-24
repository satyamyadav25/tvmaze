import Card from '../Components/Card';

const Home = ({shows}) => {

  return (
    <div>
      <h1 className='flex justify-center items-center h-20 font-serif font-extrabold text-5xl text-rose-500  bg-slate-600'>TV Shows</h1>
      <Card shows={shows} />
    </div>
  );
};

export default Home;
