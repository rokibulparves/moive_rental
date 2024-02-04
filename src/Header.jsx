import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import MovieCart from "./cine/MovieCart";
import { MovieContext } from "./context/movieContext";
import { ThemeContext } from "./context/themeContext";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { dark, setDark } = useContext(ThemeContext);
  console.log(state.cartData);

  function handleCloseCart() {
    setShowCart(false);
  }

  return (
    <>
      {showCart && <MovieCart onClose={handleCloseCart} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width={139} height={26} alt="" />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDark((dark) => !dark)}
              >
                <img src={dark ? Sun : Moon} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setShowCart(true)}
              >
                <img src={ShoppingCart} width={24} height={24} alt="" />
                {state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-rose-600 text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
