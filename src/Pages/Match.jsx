import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Match = () => {
  return (
    <div className="w-full">
      <div className="w-full border border-red-700 py-32">
        <Navbar />
      </div>

      <Footer />
    </div>
  );
};

export default Match;
