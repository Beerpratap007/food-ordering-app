import { CDN_URL } from "../utils/constants";

function ItemList({items}) {
  return (
    <>
			{items?.map((item) => (
				<div className="accordion-content flex justify-between gap-x-2 mb-4 pb-6 border-b-2" key={item?.card?.info?.id}>
					<div className="w-9/12">
						
						<h3 className="font-semibold">{item?.card?.info?.name}</h3>
						<span className="font-normal pt-2">₹ {item?.card?.info?.price/100}</span>
						<p className="text-sm pt-4">{item?.card?.info?.description}</p>
					</div>
					<div className="w-3/12 add-to-card bg-cyan-100 relative">
						<img className="object-contain rounded-lg" src={CDN_URL+item?.card?.info?.imageId} alt="" />
						<button className="w-20 mx-auto my-0 font-semibold bg-white text-black px-4 py-2 absolute left-0 right-0 -bottom-3 rounded-lg shadow-md">Add +</button>
					</div>
				</div>
			))}
		</>
  )
}

export default ItemList