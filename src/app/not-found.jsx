import Link from "next/link";

function NotFound() {
  return (
    <div className=" my-10 flex flex-col items-center justify-center gap-5 ">
      <h1 className="  text-3xl text-center font-bold">Page Not Found</h1>
      <button className=" btn btn-soft text-center">
        <Link href={"/"}> Back to home</Link>
      </button>
    </div>
  );
}

export default NotFound;
