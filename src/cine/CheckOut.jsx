/* eslint-disable react/prop-types */
import Delete from "../assets/delete.svg";
import { getImgUrl } from "../utils/cine-utilites";
export default function Checkout({ movie, onRemoveCart, isEmpty }) {
  return (
    <>
      <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
        <div className="grid grid-cols-[1fr_auto] gap-4">
          {isEmpty === true ? (
            <p className="text-black">Cart is empty!</p>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <img
                  className="rounded overflow-hidden"
                  src={getImgUrl(movie.cover)}
                  alt=""
                  height={"50px"}
                  width={"50px"}
                />
                <div>
                  <h3 className="text-base md:text-xl font-bold">
                    {movie.title}
                  </h3>
                  <p className="max-md:text-xs text-[#575A6E]">{movie.genre}</p>
                  <span className="max-md:text-xs">${movie.price}</span>
                </div>
              </div>
              <div className="flex justify-between gap-4 items-center">
                <button
                  className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                  onClick={(e) => onRemoveCart(e, movie)}
                >
                  <img className="w-5 h-5" src={Delete} alt="" />
                  <span className="max-md:hidden">Remove</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
