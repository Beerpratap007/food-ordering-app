import { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenu() {
  const { resId } = useParams();
  //This is custome hook
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if(resInfo == null) return <Shimmer />
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  const restaurantCategories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category) => category?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  return (
    <div className='res-menu w-6/12 ml-auto mr-auto bg-slate-100 p-4 my-6'>
      <h2 className='text-xl font-bold'>{name}</h2>
      <p>{cuisines.join(', ')}- {costForTwoMessage}</p>
      <h3>Restaurant Menu</h3>
      {restaurantCategories?.map((category, index) => {
        return(
          <RestaurantCategory 
            key={category?.card?.card?.title}
            data={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        )
      })}
    </div>
  )
}
export default RestaurantMenu