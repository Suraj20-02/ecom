import React, { useContext } from "react";
import image from "../../assets/pics/image.png";
import image2 from "../../assets/pics/image2.jpg";
import Additem from "../../AddItems";
import { ProductContext } from ".";

const Products = () => {
  const [productList, setProductList] = useContext(ProductContext);

  // const productlist = [
  //   { src: image, name: "Basic Tee", color: "Blue", price: 35 },
  //   { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
  //   { src: image, name: "Basic Tee", color: "Blue", price: 35 },
  //   { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
  //   { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
  //   { src: image, name: "Basic Tee", color: "Blue", price: 35 },
  //   { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
  //   { src: image, name: "Basic Tee", color: "Blue", price: 35 },
  //   { src: image2, name: "Plain Red Tee", color: "Red", price: 30 },
  // ];
  return (
    <div className="h-full w-full  ">
      <div className="bg-gray-300 rounded-lg h-full w-full ">
        <div className="overflow-x-auto overflow-y-auto h-full">
          <table className="min-w-full bg-white border border-gray-300 ">
            <thead className="sticky top-0">
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ">
                <th className="py-3 px-6 text-left">SN</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Color</th>
                <th className="py-3 px-6 text-left">Price($)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {productList.map((Product, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{i + 1}</td>
                  <td className="py-3 px-6 text-left">{Product.name}</td>
                  <td className="py-3 px-6 text-left">
                    <img src={Product.src} className="h-12 w-12" />
                  </td>
                  <td className="py-3 px-6 text-left">{Product.color}</td>
                  <td className="py-3 px-6 text-left">{Product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
