"use client";

export default function DeleteUser(props) {
  const userid = props.id;
  const deleteuser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + userid, {
      method: "delete",
    });
    result = await result.json();
    if (result.success) {
      alert("User Is Deleted.");
    }
  };
  return (
    <button onClick={deleteuser} className="border p-2">
      Delete
    </button>
  );
}
