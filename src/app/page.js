import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen p-8 text-center">
      <Link href="/products" className="border-b-2 border-blue-400">
        *Products Lists
      </Link>
      <br />
      <br />
      <Link href="/addproducts" className="border-b-2 border-blue-400">
        *Add Products
      </Link>
    </main>
  );
}
