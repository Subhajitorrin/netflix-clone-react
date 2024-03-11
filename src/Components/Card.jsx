import React from 'react'

function Card({imglink}) {
  return (
    <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500${imglink}`}/>
    </div>
  )
}

export default Card