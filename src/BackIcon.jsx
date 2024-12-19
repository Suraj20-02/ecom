import { BackwardIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Button } from "bootstrap";

import React from "react";
import { useNavigate } from "react-router-dom";
import Additem from "./AddItems";

const BackIcon = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    console.log("loged out ");
    navigate("/");
  };

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <BackwardIcon
          //   onClick={handleLogout}
          className="h-8 w-8 hover:bg-red-400 text-black py-1 px-1 rounded-full cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent className="w-[150px] h-[150px] !shadow-sm border rounded bg-gray-400 flex flex-col   justify-start">
        <div>
          <button
            className="bg-transparent w-full flex flex-row hover:bg-slate-400 "
            onClick={handleLogout}
          >
            <LockClosedIcon className="h-6 w-8 text-white py-1 px-1 rounded-full cursor-pointer mr-0 pr-0"></LockClosedIcon>
            <div className="ml-0 pl-0"> Logout</div>
          </button>
        </div>

        {/* <div>
          <Additem></Additem>
        </div> */}
      </PopoverContent>
    </Popover>
  );
};

export default BackIcon;
