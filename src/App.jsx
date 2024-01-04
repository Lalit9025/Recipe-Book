import { useEffect, useState } from "react";
import './App.css'
import SearchResult from "./components/SearchResults/SearchResult";
import { foodData } from "./Recipes";
import Favorite from "./components/Favorite";
import { Button } from "./components/Button";

const App = () => {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [warning, setWarning] = useState(false);
  

  useEffect(() => {
  setData(foodData);
  setFilteredData(foodData);
  console.log(data)
  }, []);
   
  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if(searchValue === ""){
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
   food.name.toLowerCase().includes(searchValue.toLowerCase()) ||
   food.ingredients.some((ingredient) => 
     ingredient.name.toLowerCase().includes(searchValue.toLowerCase())
   )
 );
    setFilteredData(filter);
  }

  const filterFood = (type) =>{
    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all")
      return;
    }

    const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
    )
    setFilteredData(filter);
    setSelectedBtn(type);

  }

  const filterBtns = [
    {
      name:"All",
      type:"all",
    },
    {
      name:"Vegetarian",
      type:"vegetarian",
    },
    {
      name:"NonVeg",
      type:"nonveg",
    },
    {
      name:"Vegan",
      type:"vegan",
    }
  ]
 
  const addToFavorite = (item) => {
    let isPresent = false;
    favorites.forEach((product) => {
      if(item.id === product.id)
      isPresent = true;
    })
    if(isPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
    setFavorites([...favorites,item])
    console.log(favorites);
   };
   
   
   const removeFromFavorite = (item) => {
    setFavorites(currentFavorites => {
     return currentFavorites.filter(favoriteItem => favoriteItem.id !== item.id);
    });
   };
   
  return (
    <>
    <div className="container">
      <div className="top-container">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchFood}
          placeholder="Search Food"/>
        </div>
      </div>
      <div className="filter-container">
        {filterBtns.map((value) =>(
          <Button 
            isSelected = {selectedBtn === value.type}
            key={value.name} onClick={() => filterFood(value.type)}>{value.name}
          </Button>
        ))}
      </div>
    
    </div>
    <SearchResult data = {filteredData}  addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} favtext={"Add to Favorite"}/>

    <Favorite data={favorites} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} favtext={"Remove from Favorite"}/>
    {warning && <div className="warning">item is already in fav</div>}
   

    </>
  );
};

export default App;





