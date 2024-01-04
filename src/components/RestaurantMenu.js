import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if(resInfo == null) return <Shimmer />
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  return (
    <div className='res-menu'>
      <h2>{name}</h2>
      <p>{cuisines.join(', ')}- {costForTwoMessage}</p>
      <h3>Restaurant Menu</h3>
      <ul>
        {itemCards?.map(item => (
            <li className='menu-item' key={item?.card?.info?.id}>
              <b>Name : {item?.card?.info?.name}</b><br />
              <span>Category : {item?.card?.info?.category}</span><br />
              <span>Price : Rs.{item?.card?.info?.price/100}</span>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default RestaurantMenu