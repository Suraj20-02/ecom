import React, { Children, createContext, useState } from "react";
import App from "../../App";
import image from "../../assets/pics/image.png";
import image2 from "../../assets/pics/image2.jpg";

export const ProductContext = createContext();
const ProductProvider = ({ Children }) => {
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
  ]);
  return (
    <ProductContext.Provider value={[productList, setProductList]}>
      {Children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
