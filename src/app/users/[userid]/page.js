async function getUsers(Id) {
  let data = await fetch(`http://localhost:3000/api/users/${Id}`);
  data = await data.json();
  return data.Result;
}
export default async function Page({ params }) {
  const user = await getUsers(params.userid);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">User Details</h1>
      <h1 className="mt-5">Id: {user.Id}</h1>
      <h1 className="mt-5">Name: {user.Name}</h1>
      <h1 className="mt-5">Age: {user.Age}</h1>
      <h1 className="mt-5">Email: {user.Email}</h1>
    </div>
  );
}
