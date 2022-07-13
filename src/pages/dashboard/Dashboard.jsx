import React from "react";
import { Header } from "../../components/header/Header";
import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <Header />
      <div id="dashboard" className="container-sm">
        <h1 className="title text-center">Dashboard</h1>
        <div className="section1">
          <div className="section1-text">
            Add <br />
            Product
          </div>
          <div className="section1-text">
            View <br />
            Product
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
