import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Stars from '../components/Stars/Stars';
import Cards from '../components/Card/Card';


const Home = () => {
  const [popMovies, setPopMovies] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=66f5d5684311fae95556e0bc986b9e8f'
    )
      .then((res) => res.json())
      .then((data) => setPopMovies(data.results));
  }, []);

  return (
    <>
      <div className="bg-gray-900">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={10}
          infiniteLoop={true}
          showStatus={false}
        >
          {popMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="relative">
                <img
                  className="h-[600px] w-auto "
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="Img carrousel Movie"
                  
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <div className="text-white text-3xl font-bold mb-6">
                    {movie ? movie.original_title : ''}
                  </div>
                  <div className="text-white text-xl mb-8 flex-col ">
                    <span className="flex justify-center items-center ml-3">
                      <span className='mr-2'>{movie ? movie.vote_average : ''}</span>
                    {Stars(movie ? movie.vote_average : '')} 
                      <IoMdStar  />
                    </span>
                  </div>
               
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <Cards/>
    </>
  );
};

export default Home;
