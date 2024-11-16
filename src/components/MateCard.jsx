import React from "react";
import { mates } from "./QuestionList";
import Footer from "./Footer";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const MateList = () => {
  return (
    <div>
      <div className="w-full lg:w-[85%] mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-32">
          {mates.map((user, index) => (
            <MateCard key={user.id || index} user={user} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const MateCard = ({ user }) => {
  return (
    <div className="w-full my-5">
      <div className="w-full border rounded-lg relative group overflow-hidden hover:drop-shadow-sm hover:bg-white mb-2">
        <div className="relative overflow-hidden">
          <img
            src={user.image}
            alt={user.name}
            className="object-cover h-40 w-full rounded-t-lg transition duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        <div className="px-4 py-6 w-full grid gap-2">
          <h2 className="text-lg font-semibold text-black text-left">
            {user.name}
          </h2>

          <div className="flex items-center space-x-4">
            <p className="text-base font-semibold text-gray-800">
              Age:{" "}
              <span className="text-gray-700 font-normal text-[15px] ml-1">
                {user.age}
              </span>
            </p>
            <p className="text-base font-semibold text-gray-800">
              Gender:{" "}
              <span className="text-gray-700 font-normal text-[15px] ml-1">
                {user.gender}
              </span>
            </p>
          </div>
          <div className="w-full grid grid-cols-3 gap-3 mt-3">
            <div className="col-span-2 border">
              <button
                className="py-2.5 px-5 w-full border font-semibold text-base cursor-pointer rounded-md text-white bg-[#36A398]"
                type="button"
              >
                Connect
              </button>
            </div>
            <div className="col-span-1 flex justify-end items-center">
            <button
                className="p-3 border font-semibold text-base cursor-pointer rounded-full border-[#36A398] flex justify-center items-center"
                type="button"
              >
               <MdOutlineRemoveRedEye size={20} color="black" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateList;
