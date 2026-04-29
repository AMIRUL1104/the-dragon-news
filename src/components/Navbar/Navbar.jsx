import Link from "next/link";
import user from "@/assets/user.png";
import Image from "next/image";
function Navbar() {
  return (
    <div className="  container mx-auto flex items-center justify-between   ">
      <div></div>
      <nav className="  ">
        <ul className="flex items-center justify-between gap-4 container mx-auto">
          <li>
            <Link
              href={"/"}
              className=" text-gray-700 font-medium hover:border-b-2"
            >
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              href={"/about"}
              className=" text-gray-700 font-medium hover:border-b-2"
            >
              About
            </Link>{" "}
          </li>
          <li>
            <Link
              href={"/carrer"}
              className=" text-gray-700 font-medium hover:border-b-2"
            >
              Carrer
            </Link>{" "}
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-between gap-4 ">
        <Image src={user} alt="user" width={50} height={50}></Image>
        <Link href={"/login"} className=" btn btn-soft">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
