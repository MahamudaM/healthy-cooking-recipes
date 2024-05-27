import { Outlet } from "react-router-dom";
import Navbar from "../components/shards/Navbar";
import Footer from "../components/shards/Footer";


export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
