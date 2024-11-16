import React from "react";
import Navbar from "./Navbar";
import Auth from "./Auth";
import SVG from "../assets/illustrtion.png";
import { Link } from "react-router-dom";

const Landing = ({ isUser }) => {
  return (
    <div className="w-full h-screen rounded-b-[300px] bg-gradient-to-t from-[#C7E9E9] to-white">
      <Navbar isUser={isUser} />
      <div className="flex justify-center items-center">
        <div className="w-[85%] mx-auto grid lg:grid-cols-2 gap-4 mt-[10%]">
          <div className="flex items-center md:w-[70%] lg:ml-7">
            <div className=" grid gap-4">
              <p className="text-lg font-medium ">Roommates Made Easy</p>
              <h1 className="text-5xl font-semibold leading-18">
                Find, Match, and Live Comfortably!
              </h1>
              <p className="text-lg font-normal text-gray-700">
                Focuses on matching based on personal vibe, making it appealing
                for you.
              </p>
              <button
                class="mt-2 w-40 rounded-xl px-4 py-3 text-lg font-semibold text-[#36A398] border border-[#36A398]"
                type="button"
              >
                Explore
              </button>
            </div>
          </div>
          <div>
            {isUser ? (
              <img
                src={SVG}
                alt="illustration"
                className="object-cover w-full h-[600px]"
              />
            ) : (
              <Auth />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
