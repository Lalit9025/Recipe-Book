import { useState, useEffect } from 'react';
import './SearchResult.css'
import Foodcard from './Foodcard';
const SearchResult = ({data, addToFavorite, removeFromFavorite, favtext}) => {
  return (
        <div className="main_res">
           {data?.map((item) => (
            <Foodcard key={item.id}  addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} item={item} favtext={favtext} />       
           ))}
        </div>
        
        
  )
}

export default SearchResult
