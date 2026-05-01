import Image from "next/image";
import logo from "@/assets/logo.png";
function Header() {
  return (
    <div className=" flex items-center justify-center flex-col gap-3 py-6">
      <Image src={logo} alt="logo" width={300} height={150} />
      <p className=" text-gray-700 ">Journalism Without Fear or Favour</p>
      <p>Sunday, November 27, 2025</p>

      <div className=" bg-slate-400 container mx-auto flex items-center justify-start gap-5 ">
        <button className="btn btn-primary">Latest</button>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Header;
