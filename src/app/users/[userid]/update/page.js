"use client";

import { useEffect, useState } from "react";

export default function Page({ params }) {
  let id = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/api/users/" + id);
    data = await data.json();
    setName(data.Result.Name);
    setAge(data.Result.Age);
    setEmail(data.Result.Email);
  };

  const updateUser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + id, {
      method: "PUT",
      body: JSON.stringify({ Name: name, Age: age, Email: email }),
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("User Details Updates Successfully.");
    } else {
      alert("Please Enter Valid Data.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Update Page</h1>
      <div className="space-y-4 mt-8">
        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Age"
          className="w-full p-2 border border-gray-300 rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email"
          className="w-full p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={updateUser}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update User
        </button>
      </div>
    </div>
  );
}
