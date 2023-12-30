import { useState, useEffect } from 'react';
import RestorauntCard from './RestorauntCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      let json = await data.json();
      setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    fetchData();
  }, []);

  const searchHandler = () => {
    const data = listOfRestraunt?.filter((list) => list.info.name.toLowerCase().includes(searchVal.toLowerCase()));
    setFilteredList(data);
    setSearchVal('');
  }

  return listOfRestraunt.length === 0 ? (<Shimmer />) : (
    <div className='body'>
      <div className='filter-sec'>
        <button 
          className='filter-btn' 
          onClick={() => {
            const filteredList = listOfRestraunt.filter((res) => res.info.avgRating > 4.3);
            setListOfRestraunt(filteredList);
          }}>Top Rated Restaurants</button>

          <div className='search'>
            <input 
              type='text' 
              value={searchVal} 
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder='Search...' />
            <button 
              onClick={() => searchHandler()}>Search</button>
          </div>
      </div>
      <div className='res-container'>
        {filteredList?.map((restaurant) => (
          <RestorauntCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body