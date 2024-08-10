import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function Page() {
  const users = await getUsers();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Users Details In UI</h1>
      {users.map((item) => (
        <div key={item.Id} className="mt-5">
          <span className="inline-block w-52">
            <Link href={`users/${item.Id}`}>{item.Name}</Link>
          </span>
          <span className="inline-block w-52">
            <Link href={`users/${item.Id}/update`}>Edit</Link>
          </span>
          <span>
            <DeleteUser id={item.Id} />
          </span>
        </div>
      ))}
    </div>
  );
}
