import React from 'react'
import './Foodcard.css'


const Foodcard = ({ item,addToFavorite, removeFromFavorite,favtext}) => {
  if (!item) {
    return null; 
  }
   const {name,image,text,ingredients,instructions}= item;

  return (
    <div  className="food_card">
                <div className="food_image">
                  <img src= {image}/>
                  <div className="info">
                        <h3>{name}</h3>
                        <p>{text}</p>
                    </div>
                </div>   
                <div className="food_info">
                    <div className="indeg">
                      <h3>Ingredients</h3>
                      <div className="ingred_elem">
                       {ingredients?.map((ingredient, index,) => (
                           <p key={index}>{`${ ingredient.name} - ${ingredient.quantity},`}</p>
                        ))}
                      </div>                  
                    </div>
                    <div className="ins">
                       <h3>Instructions</h3>
                       <div className="ingred_elem">
                          {instructions?.map((instruction, index) => (
                            
                           <p key={index}>{`${index+1}.  ${instruction.i}`}</p>
                          ))}
                     </div>
                    
                    </div>
                    <div className='btn'>
                    <button onClick={()=>addToFavorite(item)}>{favtext}</button>
                    </div>
                    
                   

                    
                </div>
    </div>
  )
}

export default Foodcard