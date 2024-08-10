const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();

  return data.result;
};

export default async function Page() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Products Displaying In UI From The DataBase.
      </h1>

      <table className="mt-5 w-full">
        <thead className="font-bold">
          <tr>
            <td className="border-2">Name</td>
            <td className="border-2">Price</td>
            <td className="border-2">Color</td>
            <td className="border-2">Company</td>
            <td className="border-2">Model</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td className="border-2">{item.name}</td>
              <td className="border-2">{item.price}</td>
              <td className="border-2">{item.color}</td>
              <td className="border-2">{item.company}</td>
              <td className="border-2">{item.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
