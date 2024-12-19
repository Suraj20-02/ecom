import React, { useContext, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import { cartContext } from "./items";

export default function Cart() {
  const [cartItems, setCartItems, cartTotal, setCartTotal] =
    useContext(cartContext);

  const handleCartDelete = (item, index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    setCartTotal(cartTotal - item.price);
  };
  const handleBuyAll = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  return (
    <Popover
      radius="none"
      placement="bottom-end"
      className="border-none rounded !shadow-none"
      shadow="sm"
    >
      <div className="relative">
        {cartItems.length === 0 || (
          <p className="h-3 w-4 bg-red-400 rounded-full text-xs pl-1 pb-4 absolute top-0 -right-1">
            {cartItems.length > 9 ? "9+" : cartItems.length}
          </p>
        )}
        <PopoverTrigger>
          <ShoppingCartIcon className="hover:bg-slate-400 rounded-full h-8 w-8 text-yellow-700 cursor-pointer" />
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-[300px] h-[300px] !shadow-sm border rounded bg-gray-400 flex flex-col   justify-start  ">
        <div className=" mt-1 mb-2 border-b-2 w-full ">
          <h6 className=" font-bold">Your cart</h6>
        </div>
        <div className="overflow-auto">
          <ol className="space-y-2 ">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
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
                    <PlusCircleIcon
                      className="h-5 w-5 text-red-700 hover:text-red-500 hover:cursor-pointer rotate-45"
                      onClick={() => handleCartDelete(item, index)}
                    ></PlusCircleIcon>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </ol>
          <div className="">
            {cartItems.length === 0 || (
              <div className="flex flex-row justify-around mt-2 items-baseline">
                <p className="font-bold text-black">Total: ${cartTotal}</p>
                <button
                  className="bg-transparent text-green-800 rounded-full bg-green-100 hover:bg-green-50 "
                  onClick={() => {
                    handleBuyAll();
                  }}
                >
                  Buy all
                </button>
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
