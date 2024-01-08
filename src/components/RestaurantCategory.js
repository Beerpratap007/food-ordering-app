import { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({data, showItems, setShowIndex}) {
	// const [showItems, setShowItems] = useState(false);

	//Lifting state up
	const accordionHandler = ()=> {
		//setShowItems(!showItems);
		setShowIndex();
	}


  return (
    <div className="bg-white my-4 pt-4 px-4 shadow-md">
			<div onClick={accordionHandler} className="accordion-title text-lg font-semibold flex justify-between pb-4 cursor-pointer">
				<span>{data?.card?.card?.title} ({data?.card?.card?.itemCards?.length})</span>
				{<span>{showItems ? '🔽' : '🔼'}</span>}
			</div>
			{showItems && <ItemList items={data?.card?.card?.itemCards} />}
		</div>
  )
}
export default RestaurantCategory