
import Navbar from "../../components/navbar/Navbar"
import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}




export  default Layout;
