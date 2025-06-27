import React from "react";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import LandingSections from "../components/LandingSections";


const Home = () => {
  return (
    <div className="w-full bg-white h-screen overflow-y-auto">
      <Landing />
      <LandingSections />
      <Footer />
    </div>
  );
};

export default Home;
