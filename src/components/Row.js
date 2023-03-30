import React from 'react'
import instance from '../instance'
import { useEffect, useState } from 'react'
import './Row.css'
import axios from 'axios'
function Row({isPoster, title, fetchUrl }) {
  const [movies, setMovies] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/";
  const fetchData = async () => {
    const response = await instance.get(fetchUrl)
    console.log(response);
    // const {data}= await axios.get(`https://api.themoviedb.org/3${fetchUrl}`)
    setMovies(response.data.results);
  }
  useEffect(() => {
    fetchData()
  }, [])
 
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='movies_row'>
        {
          movies.map(movie => (
            <img className={`movie ${isPoster&& 'movie_poster'}`} src={`${base_url}${isPoster?movie.poster_path: movie.backdrop_path}`}/>
            // <h1>{movie.original_title || movie}</h1>
          ))
        }
      </div>
    </div>
  )
}

export default Row