import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className=" capitalize text-3xl my-5 text-center ">
        the dragon news
      </h1>
      <button className=" btn btn-primary">
        <Link href={"/login"}>Login</Link>
      </button>
    </main>
  );
}
