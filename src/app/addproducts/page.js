"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");

  const addProduct = async () => {
    console.log(name, price, color, company, model);

    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company, model }),
    });
    result = await result.json();
    if (result.success) {
      alert("New Product Added.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Add Products</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Product Name"
        className="w-full p-2 border border-gray-300 hover:border-gray-600 transition-all rounded mt-5"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Product Price"
        className="w-full p-2 border border-gray-300 hover:border-gray-600 transition-all rounded mt-5"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter Product Color"
        className="w-full p-2 border border-gray-300 hover:border-gray-600 transition-all rounded mt-5"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Product Company"
        className="w-full p-2 border border-gray-300 hover:border-gray-600 transition-all rounded mt-5"
      />
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Enter Product Model"
        className="w-full p-2 border border-gray-300 hover:border-gray-600 transition-all rounded mt-5"
      />
      <button
        onClick={addProduct}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </div>
  );
}
