import { HeartIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import React, { useContext } from "react";
import { favContext } from "./items";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

const Favourites = () => {
  const [likedItems, itemDetails] = useContext(favContext);
  const likedCount = Object.values(likedItems).filter(
    (value) => value === true
  ).length;
  const likedItemDetails = itemDetails.filter(
    (item, index) => likedItems[index] === true
  );
  console.log(likedItemDetails);

  return (
    <Popover placement="bottom-end" radius="full">
      <div className="relative">
        {likedCount === 0 || (
          <p className="h-3 w-4 bg-red-400 rounded-full text-xs pl-1 pb-4 absolute top-0 -right-1 z-10">
            {likedCount > 9 ? "9+" : likedCount}
          </p>
        )}

        <PopoverTrigger>
          <HeartIcon className="grid hover:bg-slate-400  rounded-full h-8 w-8 text-red-700 hover:text-red-500 cursor-pointer"></HeartIcon>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-[300px] h-[300px] !shadow-sm border rounded bg-gray-400 flex flex-col   justify-start  ">
        <div className=" mt-1 mb-2 border-b-2 w-full ">
          <h6 className=" font-bold">Your Favourites</h6>
        </div>
        <div className="overflow-auto">
          <ol className="space-y-2 ">
            {likedItemDetails.length > 0 ? (
              likedItemDetails.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-red-100 items-center gap-x-32 p-2 mt-1 rounded shadow"
                >
                  <div>
                    <p className="font-medium text-black">{item.name}</p>
                    <p className="text-sm text-gray-500"> {item.color}</p>
                  </div>
                  <div className="font-medium text-black flex flex=row gap-3">
                    ${item.price}
                    <PlusCircleIcon className="h-5 w-5 text-green-700 hover:text-green-500 hover:cursor-pointer  ">
                      Buy
                    </PlusCircleIcon>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">No Favourites.</p>
            )}
          </ol>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Favourites;
