import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context/themeContext";
export default function Page() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={` h-full w-full ${dark ? "dark" : ""} `}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
