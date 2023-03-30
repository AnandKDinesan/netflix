import React from 'react'
import requests from '../request'
import instance from '../instance'
import { useEffect,useState } from 'react'
import './Banner.css'
function Banner() {
    const [movie,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchData=async()=>{
        const response= await instance.get(requests.fetchNetflixOriginals)
        console.log(response.data.results);
        setMovies(response.data.results[Math.floor( Math.random()*response.data.results.length)])
       console.log(movie);

    }
    useEffect(()=>{
        fetchData()
    },[])
    function truncate(str,n){
      return str?.length>n?str?.substr(0,n-1)+'...':str;
    }
  return (
    <div className='banner' style={{backgroundSize:'cover',
      backgroundImage:`url(${base_url}${movie.backdrop_path})`}}>
        <div className='banner_content'>
          <h1 className='banner_title'>
            {
              movie.name
            }
          </h1>
          <h2 className='banner_overview'>{
            truncate(movie?.overview,150)
          }...</h2>
        </div>
      </div>
  )
}

export default Banner