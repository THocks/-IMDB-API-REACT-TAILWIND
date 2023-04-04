import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";

const Cards = () => {
    const [popCardMovies, setPopCardMovies] = useState([]);
    const [currentPages, setCurrentPages] = useState(1);
    
    useEffect(() => {
      const fetchData = async () => {
        const results = [];
        for (let i = 1; i <= 30; i++) {
          const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=66f5d5684311fae95556e0bc986b9e8f&sort_by=popularity.desc&page=${i}`);
          const data = await response.json();
          results.push(...data.results);
        }
        setPopCardMovies(results);
      };
      fetchData();
    }, []);
    
    const handlePageChange = (pageNumber) => {
      setCurrentPages(pageNumber);
    };
    
    const moviesPerPage = 20;
    const indexOfLastMovie = currentPages * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = popCardMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  return (
    <>
    <div className="flex flex-wrap gap-4 ">
      {currentMovies
      
      .map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          className=" py-6 flex flex-col justify-center sm:py-12 mb-24 "
        >
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
              <div className="h-48 overflow-visible w-1/2">
                <img
                  className="rounded-3xl shadow-lg"
                  src={`https://image.tmdb.org/t/p/original${
                    movie ? movie.poster_path : ""
                  }`}
                  alt=""
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-bold">
                    {movie ? movie.original_title : ""}
                  </h2>
                  <div className="bg-yellow-400 font-bold rounded-xl p-2 flex">
                    {movie  ? movie.vote_average : ""}
                    
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Filme</div>
                  <div className="text-lg text-gray-800">
                    {" "}
                    {movie ? movie.release_date : ""}
                    
                  </div>
                </div>
                <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                  {movie ? movie.overview.slice(0, 118) + "..." : ""}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <div className="flex justify-center bg-white ">
     <nav aria-label="Page navigation example">
       <ul className="list-style-none flex">
         <li>
           <button
             className="relative block rounded bg-transparent py-1.5 px-3 text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
             onClick={() => handlePageChange(currentPages - 1)}
             disabled={currentPages === 1}
           >
             <span aria-hidden="true">&laquo;</span>
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 1 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(1)}
           >
             1
           </button>
         </li>
         <li aria-current="page">
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3  text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 2 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(2)}
           >
             2
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 3 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(3)}
           >
             3
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 4 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(4)}
           >
             4
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 5 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(5)}
           >
             5
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 6 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(6)}
           >
             6
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 7 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(7)}
           >
             7
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 8 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(8)}
           >
             8
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 9 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(9)}
           >
             9
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 10 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(10)}
           >
             10
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 11 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(11)}
           >
             11
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 12 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(12)}
           >
             12
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 10 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(13)}
           >
             13
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 14 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(14)}
           >
             14
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 15 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(15)}
           >
             15
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 16 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(16)}
           >
             16
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 17 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(17)}
           >
             17
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 18 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(18)}
           >
             18
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 19 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(19)}
           >
             19
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 20 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(20)}
           >
             20
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 21 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(21)}
           >
             21
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 22 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(22)}
           >
             22
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 23 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(23)}
           >
             23
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 24 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(24)}
           >
             24
           </button>
         </li>
         <li>
           <button
             className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
               currentPages === 25 ? "font-bold" : ""
             }`}
             onClick={() => handlePageChange(25)}
           >
             25
           </button>
         </li>

         <li>
           <button
             className="relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
             onClick={() => handlePageChange(currentPages + 1)}
             disabled={currentPages === 10}
           >
             <span aria-hidden="true">&raquo;</span>
           </button>
         </li>
       </ul>
     </nav>
   </div>
    </>
  
  );
};

export default Cards;


