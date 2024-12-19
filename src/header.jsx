import SearchBar from "./SearchBar";
import me from "./assets/pics/me.png";
import { HeartIcon } from "@heroicons/react/16/solid";
import Cart from "./Cart";
import BackIcon from "./BackIcon";
import "./App.css";
import { cartContext } from "./items";
import { useContext } from "react";
import Favourites from "./Favourites";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const handleHomeClick = () => {
    Navigate("/home");
  };

  return (
    <>
      <div className="flex justify-between items-center py-5 fixed top-0 left-0 right-0 bg-slate-200 z-50 px-10 h-16 border-b-2 border-red-200 ">
        <div
          className="flex flex-row gap-2 bg-purple-100 rounded-full hover:bg-purple-50 hover:cursor-pointer"
          onClick={() => {
            handleHomeClick();
          }}
        >
          <div>
            <img src={me} className="h-12 w-12 rounded-full "></img>
          </div>
          <div
            className="pt-1"
            style={{ fontFamily: " 'Qwitcher Grypen', cursive" }}
          >
            <p className="font-black text-4xl text-purple-900  hover:text-purple-800">
              MenWear
            </p>
          </div>
        </div>

        <div className="flex-1  justify-center w-96">
          <SearchBar />
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <Favourites />

          <Cart />

          <BackIcon />
        </div>
      </div>
    </>
  );
};
export default Header;
