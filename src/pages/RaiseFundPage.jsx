import React from "react";
import NavBar from "../components/Navbar";
import RaiseFund from "../components/RaiseFund";
import "./RaiseFundPage.css";

const RaiseFundPage = () => {
  return (
    <div className="raiseFundPage">
      <NavBar />
      <RaiseFund />
    </div>
  );
};

export default RaiseFundPage;
