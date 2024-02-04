/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Tag from "../assets/tag.svg";
import { MovieContext } from "../context/movieContext";
import { getImgUrl } from "../utils/cine-utilites";
import MovieModal from "./MovieModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [modal, setModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

  function handleSelected() {
    setSelectedMovie(null);
    setModal(false);
  }

  function handleMovieSelection(movie) {
    setModal(true);
    setSelectedMovie(movie);
  }

  function handleAddToCart(e, movie) {
    e.stopPropagation();

    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });

      toast.success(`Movie ${movie.title} added Successfully`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`Movie ${movie.title} has been added already!`, {
        position: "bottom-right",
      });
    }
  }

  return (
    <>
      {modal && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleSelected}
          onModalAddToCart={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={movie.rating} />
            </div>

            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={Tag} alt="" />
              <span>{movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
