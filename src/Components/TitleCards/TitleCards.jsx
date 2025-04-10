import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData]=useState([]);

  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODM5NGM4NzdhZDRjNWQ3NTRkNmQ3ODhjY2ZhY2Q5ZSIsIm5iZiI6MTc0MzkyOTk0NS40MzkwMDAxLCJzdWIiOiI2N2YyNDI1OTFiYjA0NzI4OTk5OTE3NTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.waRzv30PCWudiPrHzeZxQgeoUqgGPBC3tQ0niBK2dC4'
    }
  };
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`}className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
