import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import me from "../../assets/pics/me.png";
import { BsPersonFill } from "react-icons/bs";
import Orders from "../Orders";
import DashboardContent from "../DashboardContent";
import Products from "../products/Products";
import Customers from "../Customers";
import Settings from "../Settings";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="w-full h-[50px] bg-red-100 ">
        <Link to={"/home"}>
          <div className="flex flex-row gap-2 bg-purple-100 rounded-full hover:bg-purple-50 hover:cursor-pointer ml-4 w-max ">
            <div>
              <img src={me} className="h-12 w-12 rounded-full "></img>
            </div>
            <div
              className="pt-1"
              style={{ fontFamily: " 'Qwitcher Grypen', cursive" }}
            >
              <p className="font-black text-4xl text-purple-900  hover:text-purple-800 ">
                MenWear
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-[250px] h-[calc(100%_-_50px)] bg-blue-100">
        <div className="flex flex-col gap-4 ml-7">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-1 mt-7 hover:text-gray-600 cursor-pointer w-max"
          >
            <FaHome className="text-xl  text-gray-500" />
            Dashboard
          </Link>

          <Link
            to={"/dashboard/products"}
            className="flex flex-row gap-1 hover:text-gray-600 cursor-pointer  w-max"
          >
            <AiOutlineProduct className="text-xl" />
            Products
          </Link>
          <Link
            to={"/dashboard/orders"}
            className="flex flex-row gap-1 hover:text-gray-600 cursor-pointer  w-max"
          >
            <FaCartArrowDown className="text-xl" />
            Orders
          </Link>
          <Link
            to={"/dashboard/customers"}
            className="flex flex-row gap-1 hover:text-gray-600 cursor-pointer  w-max"
          >
            <BsPersonFill className="text-xl" />
            Customers
          </Link>
          <Link
            to={"/dashboard/settings"}
            className="flex flex-row gap-1 hover:text-gray-600 cursor-pointer  w-max "
          >
            <IoMdSettings className="text-xl" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
