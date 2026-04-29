import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
}

export default MainLayout;
