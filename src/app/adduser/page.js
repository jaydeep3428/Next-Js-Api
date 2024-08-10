"use client";

import { useState } from "react";

export default function Page() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");

  const adduser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Age, Email }),
    });
    response = await response.json();
    console.log(response);
    if (response.success) {
      alert("New User Added");
    } else {
      alert("Some Error Occurd");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Add New User</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
        <input
          type="text"
          placeholder="Enter Age"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setAge(e.target.value)}
          value={Age}
        />
        <input
          type="text"
          placeholder="Enter Email"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
        <button
          onClick={adduser}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </div>
    </div>
  );
}
