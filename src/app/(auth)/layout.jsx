import Navbar from "@/components/Navbar/Navbar";

function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default AuthLayout;
