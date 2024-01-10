import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from './ItemList';

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  
  const clearCartHandler = () => {
    dispatch(clearCart());
  }

  return (
    <div className="cart-page w-6/12 m-auto mt-6">
      <h2 className="text-2xl font-bold py-2 mb-2 border-b-2 flex justify-between">
        {cartItems?.length !==0 ? 'Shopping Cart' : 'Your Shopping Cart is empty.'}
        <button className="bg-blue-400 text-white text-sm rounded-lg shadow-xl px-4 py-2 bottom-1" onClick={clearCartHandler}>Clear Cart</button>
      </h2>
      <ItemList items={cartItems} />
    </div>
  )
}

export default Cart