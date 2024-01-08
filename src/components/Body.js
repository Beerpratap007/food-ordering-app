import { useState, useEffect } from 'react';
import RestorauntCard, { withPromotedLabel } from './RestorauntCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  const RestaurantCardPromoted = withPromotedLabel(RestorauntCard);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      let json = await data.json();
      setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    fetchData();
  }, []);

  const searchHandler = () => {
    const data = listOfRestraunt?.filter((list) => list.info.name.toLowerCase().includes(searchVal.toLowerCase()));
    setfilteredRestaurant(data);
    setSearchVal('');
  }

  return listOfRestraunt?.length === 0 ? (<Shimmer />) : (
    <div className='body p-6'>
      <div className='filter-sec flex justify-between mt-6 mb-6'>
        <button 
          className='filter-btn btn px-4 py-2 bg-orange-500 rounded-lg text-white' 
          onClick={() => {
            const filteredList = listOfRestraunt.filter((res) => res.info.avgRating > 4.3);
            setListOfRestraunt(filteredList);
          }}>Top Rated Restaurants</button>

          <div className='search'>
            <input 
              className='p-4 border-solid border-2 border-gray-600 rounded-lg'
              type='text' 
              value={searchVal} 
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder='Search...' />
            <button 
              className='ml-4 p-4 border-solid border-2 border-gray-600 rounded-lg'
              onClick={() => searchHandler()}>Search</button>
          </div>
      </div>
      <div className='res-container grid grid-cols-4 gap-6'>
        {filteredRestaurant?.map((restaurant) => (
          <div className='res-card shadow-md rounded-lg' key={restaurant?.info?.id}>
            <Link to={`restaurants/${restaurant?.info?.id}`}>
              {restaurant?.info?.avgRatingString >=4.3 ? <RestaurantCardPromoted resData={restaurant} /> : <RestorauntCard resData={restaurant} />}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Body