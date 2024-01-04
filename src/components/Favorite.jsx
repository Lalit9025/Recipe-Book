import React from 'react'
import Foodcard from './SearchResults/Foodcard'


const Favorite = ({data,addToFavorite,removeFromFavorite,favtext}) => {
  return (
    <div className="main_res">
           <h1>Favourites</h1>
           
           {data?.map((item) => (
            <Foodcard key={item.id} addToFavorite={removeFromFavorite} removeFromFavorite={removeFromFavorite} item={item} favtext={favtext}/>       
           ))}
        </div>
  )
}

export default Favorite