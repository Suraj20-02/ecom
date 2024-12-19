import React, { createContext, useState } from "react"; // Added useState import
import Navigation from "../Common/Navigation";
import Products from "./Products";
import AddItems from "../../AddItems";
import SearchBar from "../../SearchBar";
import image from "../../assets/pics/image.png";
import image2 from "../../assets/pics/image2.jpg";
import Items from "../../items";

export const ProductContext = createContext();

const Index = () => {
  const [productList, setProductList] = useState([
    { src: image, name: "Basic Tee", color: "Blue", price: 35 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
    { src: image, name: "Basic Tee", color: "Blue", price: 35 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
    { src: image, name: "Basic Tee", color: "Blue", price: 35 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
    { src: image, name: "Basic Tee", color: "Blue", price: 35 },
    { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
  ]); // Set initial state as an empty array

  return (
    <ProductContext.Provider value={[productList, setProductList]}>
      <div>
        <Navigation />
        <div className="absolute top-[50px] left-[250px] h-[calc(100%_-_50px)] w-[calc(100%_-_250px)] bg-green-300">
          <div className="p-4 h-full w-full">
            <div className="flex justify-between items-center h-[60px]">
              <div className="pb-4">
                <SearchBar />
              </div>
              <AddItems />
            </div>
            <div className="h-[calc(100%_-_50px)] w-full">
              <Products />
            </div>
          </div>
        </div>
      </div>
    </ProductContext.Provider>
  );
};

export default Index;
