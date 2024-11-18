import React from "react";

const ProfileDetails = ({ userData }) => {
  return (
    <div className="w-full p-4 bg-white shadow my-5">
      {userData.map((user, id) => (
        <div className="w-full py-5">
          <div className="w-full flex items-center pb-3.5 border-b border-[#EAECF0]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#FAEFE6" />
              <path
                d="M12.385 18.3217C11.4419 18.8833 8.96891 20.0301 10.4751 21.4651C11.2109 22.166 12.0303 22.6673 13.0606 22.6673H18.9394C19.9697 22.6673 20.7891 22.166 21.5249 21.4651C23.0311 20.0301 20.5581 18.8833 19.6149 18.3217C17.4032 17.0047 14.5968 17.0047 12.385 18.3217Z"
                stroke="#BD5A00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 12.334C19 13.9908 17.6569 15.334 16 15.334C14.3431 15.334 13 13.9908 13 12.334C13 10.6771 14.3431 9.33398 16 9.33398C17.6569 9.33398 19 10.6771 19 12.334Z"
                stroke="#BD5A00"
                stroke-width="1.5"
              />
            </svg>
            <span className="text-black font-semibold capitalize text-lg px-3 ">
              Personal Information
            </span>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-8 flex-wrap py-5">
            <div className=" max-w-[192px] h-[44px] ">
              <p className=" custom-styles">Full Name</p>
              <span className="text-back font-semibold capitalize text-base">
                {user?.fullname}
              </span>
            </div>
            <div className=" max-w-[192px] h-[44px] ">
              <p className="custom-styles">Date of Birth</p>
              <span className="text-back font-semibold text-base">
                {user?.dob}
              </span>
            </div>
            <div className="max-w-[192px] h-[44px] ">
              <p className="custom-styles">Email</p>
              <span className="text-back font-semibold text-base">
                {user?.email}
              </span>
            </div>
            <div className=" max-w-[192px] h-[44px] ">
              <p className=" custom-styles">Phone</p>
              <span className="text-back font-semibold text-base">
                {user?.phone}
              </span>
            </div>
            <div className=" max-w-[192px] h-[44px] ">
              <p className=" capitalize text-sm font-normal text-black">
                Gender
              </p>
              <span className="text-back font-semibold capitalize text-base">
                {user?.gender}
              </span>
            </div>
            <div className="max-w-[192px] h-[44px] ">
              <p className=" custom-styles">Country</p>
              <span className="text-back font-semibold capitalize text-base">
                {user?.country}
              </span>
            </div>
            <div className=" max-w-[192px] h-[44px] ">
              <p className="custom-styles">State</p>
              <span className="text-back font-semibold text-base">
                {user?.state}
              </span>
            </div>

            <div className=" h-[44px] ">
              <p className="custom-styles">Address</p>
              <span className="text-back font-semibold capitalize text-base">
                {user?.address}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileDetails;
