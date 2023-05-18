import React, { useEffect } from 'react'
import "./Banner.css"
import axios from "../axios";
import { API_KEY, imageURL } from "../../constants";
import { useState } from 'react';


function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            var randomNumber = `${Math.floor(Math.random() * 20)}`;
            setMovie(response.data.results[randomNumber]);
        })
    }, [])

    return (
        <div className='banner'
            style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""}` }}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""} </h1>
            </div>
            <div className='fade-bottom'>

            </div>
        </div>
    )
}

export default Banner