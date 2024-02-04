import { useContext } from "react";
import { toast } from "react-toastify";
import Cart from "../assets/shopping-cart.svg";
import { MovieContext } from "../context/movieContext";
import Checkout from "./CheckOut";

/* eslint-disable react/prop-types */
export default function MovieCart({ onClose }) {
  const { state, dispatch } = useContext(MovieContext);

  const isEmpty = state.cartData.length === 0;
  console.log(isEmpty);

  function handleRemoveCart(e, item) {
    e.preventDefault();

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    toast.success(`Movie ${item.title} removed from the cart!`, {
      position: "bottom-right",
    });
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          {state.cartData.map((movie) => (
            <Checkout
              key={movie.id}
              movie={movie}
              onRemoveCart={handleRemoveCart}
              isEmpty={isEmpty}
            />
          ))}
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img
                src={Cart}
                width="24"
                height="24"
                alt=""
                className="fill-black"
              />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
              onClick={onClose}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
