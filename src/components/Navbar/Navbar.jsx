"use client";

import Link from "next/link";
import user from "@/assets/user.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  const userInfo = session?.user;
  // console.log(isPending, userInfo, "session");

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
        {isPending ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : userInfo ? (
          <div className="flex items-center justify-between gap-4 ">
            <Image
              src={userInfo.image || user}
              alt="user"
              width={40}
              height={40}
              className=" rounded-full"
            />
            <button
              onClick={async () => await authClient.signOut()}
              className=" btn btn-soft"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4 ">
            <Link href={"/login"} className=" btn btn-soft">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
