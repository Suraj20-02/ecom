import React, { useContext, useState } from "react";
import { ProductContext } from "./dashboard/products/index";

const AddItems = () => {
  const [productList, setProductList] = useContext(ProductContext); // Access the context
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state for a new product
  const [newProduct, setNewProduct] = useState({
    src: "",
    name: "",
    color: "",
    price: "",
  });

  // Toggle modal open/close
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imgurl = URL.createObjectURL(file);
    setNewProduct((prevProduct) => ({ ...prevProduct, src: imgurl }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new product to productList and close the modal
    setProductList((prevList) => [...prevList, newProduct]);
    setNewProduct({ src: "", name: "", color: "", price: "" }); // Reset form
    toggleModal();
    console.log(productList);
  };

  return (
    <div>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
        onClick={toggleModal}
      >
        Add Product
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          aria-hidden="true"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold">Enter Product Details</h3>
              <button
                type="button"
                className="text-gray-400 hover:bg-gray-200 rounded-lg text-sm p-2"
                onClick={toggleModal}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              {/* Image Upload */}
              <div className="flex items-center space-x-4">
                <div>
                  <label className="font-bold">Upload image:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500"
                  />
                </div>
                {newProduct.src && (
                  <img
                    src={newProduct.src}
                    alt="Product Preview"
                    className="w-16 h-16 border-2 border-gray-400"
                  />
                )}
              </div>

              {/* Color Input */}
              <div>
                <label className="font-bold">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                  value={newProduct.name}
                />
              </div>

              {/* Name and Price Inputs */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="font-bold">Color:</label>
                  <input
                    type="text"
                    name="color"
                    placeholder="Enter color of product"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                    value={newProduct.color}
                  />
                </div>
                <div className="w-1/2">
                  <label className="font-bold">Price:</label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter price"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                    value={newProduct.price}
                  />
                </div>
              </div>

              {/* Submit and Cancel Buttons */}
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItems;
