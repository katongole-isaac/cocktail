import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const SharedLayout = () => {
 
  return (
    <div className="container-fluid ">
      
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
