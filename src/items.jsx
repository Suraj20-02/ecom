// export default Items;
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import image from "./assets/pics/image.png";
import image2 from "./assets/pics/image2.jpg";
import Header from "./header";

import { HeartIcon } from "@heroicons/react/24/solid";
import { ProductContext } from "./dashboard/products";
//import { ProductContext } from "./dashboard/products/productProvider";

export const cartContext = createContext();
export const favContext = createContext();
const Items = () => {
  const location = useLocation();
  const newItem = location.state; // Get the data passed from AddItem
  const [likedItems, setLikedItems] = useState({}); // Store liked state per item
  //const [productList, setproductList] = useContext(ProductContext);

  const [productList, setproductList] = useState([
    { src: image, name: "Basic Tee", color: "Blue", price: 35 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
    { src: image, name: "Basic Tee", color: "Blue", price: 35 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
    { src: image, name: "Basic Tee", color: "Blue", price: 35 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
    { src: image, name: "Basic Tee", color: "Blue", price: 35 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    if (newItem) {
      setproductList((prevDetails) => [...prevDetails, newItem]);
    }
  }, [newItem]);

  const handleBuy = (item) => {
    alert(`Buy added: ${item.name}`);
  };

  const handleCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    const newItemPrice = item.price;
    setCartTotal(cartTotal + newItemPrice);
    console.log(typeof cartTotal);
  };

  const handleFavourites = (item, index) => {
    setLikedItems((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index],
    }));
    console.log(likedItems);
  };

  return (
    <>
      <cartContext.Provider
        value={[cartItems, setCartItems, cartTotal, setCartTotal]}
      >
        <favContext.Provider value={[likedItems, productList]}>
          <Header />
          <div className="py-16 sm:px-6 sm:py-24 w-screen overflow-x-hidden box-border bg-slate-300">
            <p className="text-lg font-light tracking-tight text-gray-900">
              What you want is here...
            </p>
            <div className="m-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {productList.map((item, index) => (
                <div key={index} className="group relative bg-gray-200">
                  <div className="w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 relative ">
                    <HeartIcon
                      className={`rounded-full absolute top-2 right-2  h-6 w-6 cursor-pointer ${
                        likedItems[index] ? "text-red-400" : "text-slate-400"
                      } hover:bg-slate-300`}
                      onClick={() => handleFavourites(item, index)}
                    />
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-full w-full p-2 object-cover object-center lg:h-full lg:w-full rounded-tr-md"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700 ml-2">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 px-2">
                        {item.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900  px-2">
                      ${item.price}
                    </p>
                  </div>
                  <div className="py-2 px-2 mt-4 flex justify-between">
                    <div>
                      <button
                        onClick={() => handleBuy(item)}
                        className="bg-gray-400 hover:bg-green-700 hover:text-white text-black font-bold py-2 px-4 rounded-full mr-4 mb-2"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={() => handleCart(item)}
                        className="bg-gray-400 hover:bg-yellow-700 hover:text-white text-black font-bold py-2 px-4 rounded-full mb-2"
                      >
                        +Cart
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </favContext.Provider>
      </cartContext.Provider>
    </>
  );
};

export default Items;
