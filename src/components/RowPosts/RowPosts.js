import React, { useEffect } from 'react'
import "./RowPosts.css"
import axios from '../axios';
import { useState } from 'react';
import { imageURL } from "../../constants";
import Youtube from 'react-youtube';
import { API_KEY } from '../../constants';

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};



function RowPosts(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results);
    })

    
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleMovie(id) {
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0)
        setUrlId(response.data.results[0])
      else
        console.log("Array empty");
    }
  )}

  

  return (
      <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((movie) =>
            <img onClick={() => handleMovie(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageURL + movie.backdrop_path}`} alt="rtdgs" />
          )}

        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key} />}
      </div>
    )
  }

  export default RowPosts; 