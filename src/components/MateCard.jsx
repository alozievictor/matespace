import React, { useState } from "react";
// import { mates } from "./QuestionList";
import { posibleMatch } from "../data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./Footer";
import {
  MdOutlineRemoveRedEye,
  MdClose,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdCake,
  MdPerson,
} from "react-icons/md";

// Enhanced age calculation function
const calculateAge = (dob) => {
  if (!dob) return "N/A";

  try {
    let birthDate;

    // Handle different date formats
    if (typeof dob === "string") {
      // Remove ordinal suffixes (1st, 2nd, 3rd, 4th, etc.)
      const cleanedDob = dob.replace(/\b(\d{1,2})(st|nd|rd|th)\b/g, "$1");

      // Try to parse the cleaned date
      birthDate = new Date(cleanedDob);

      // If the date is invalid, try alternative parsing
      if (isNaN(birthDate.getTime())) {
        // Handle formats like "DD/MM/YYYY" or "MM/DD/YYYY"
        const dateParts = cleanedDob.split(/[-/.]/);
        if (dateParts.length === 3) {
          // Assume YYYY-MM-DD or DD-MM-YYYY format
          if (dateParts[0].length === 4) {
            // YYYY-MM-DD format
            birthDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
          } else {
            // DD-MM-YYYY format (common in many countries)
            birthDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
          }
        }
      }
    } else if (dob instanceof Date) {
      birthDate = dob;
    } else {
      return "N/A";
    }

    // Check if we have a valid date
    if (isNaN(birthDate.getTime())) {
      return "N/A";
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday hasn't occurred this year
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    // Ensure age is not negative
    return age >= 0 ? age : "N/A";
  } catch (error) {
    console.error("Error calculating age:", error);
    return "N/A";
  }
};

// Format date for display
const formatDateForDisplay = (dob) => {
  if (!dob) return "N/A";

  try {
    let birthDate;

    if (typeof dob === "string") {
      const cleanedDob = dob.replace(/\b(\d{1,2})(st|nd|rd|th)\b/g, "$1");
      birthDate = new Date(cleanedDob);

      if (isNaN(birthDate.getTime())) {
        const dateParts = cleanedDob.split(/[-/.]/);
        if (dateParts.length === 3) {
          if (dateParts[0].length === 4) {
            birthDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
          } else {
            birthDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
          }
        }
      }
    } else if (dob instanceof Date) {
      birthDate = dob;
    }

    if (isNaN(birthDate.getTime())) {
      return dob; // Return original if we can't parse it
    }

    // Format as a readable date
    return birthDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    return dob; // Return original if there's an error
  }
};

// Profile Modal Component
const ProfileModal = ({ user, isOpen, onClose }) => {
  const age = calculateAge(user?.dob);
  const formattedDate = formatDateForDisplay(user?.dob);

  if (!isOpen || !user) return null;

  const handleConnect = () => {
    toast.success("Mate connected successfully!");
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm  flex items-center justify-center z-50 p-4 ">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 border border-[#36A398] rounded-full transition-colors duration-200 z-10"
        >
          <MdClose size={24} color="#36A398" />
        </button>

        {/* Profile Image */}
        <div className="relative">
          <img
            src={user.image}
            alt={user.fullname || user.name}
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg"></div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {user.fullname || user.name || "Anonymous"}
          </h2>

          <div className="space-y-4">
            {/* Age and Gender */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MdCake className="text-[#36A398]" size={20} />
                <span className="text-gray-600">
                  Age: <strong>{age}</strong>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MdPerson className="text-[#36A398]" size={20} />
                <span className="text-gray-600">
                  {user.gender
                    ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1)
                    : "N/A"}
                </span>
              </div>
            </div>

            {/* Date of Birth */}
            {user.dob && (
              <div className="flex items-center space-x-2">
                <MdCake className="text-[#36A398]" size={20} />
                <span className="text-gray-600">
                  <strong>Born:</strong> {formattedDate}
                </span>
              </div>
            )}

            {/* Email */}
            {user.email && (
              <div className="flex items-center space-x-2">
                <MdEmail className="text-[#36A398]" size={20} />
                <span className="text-gray-600 break-all">{user.email}</span>
              </div>
            )}

            {/* Phone */}
            {user.phone && (
              <div className="flex items-center space-x-2">
                <MdPhone className="text-[#36A398]" size={20} />
                <span className="text-gray-600">{user.phone}</span>
              </div>
            )}

            {/* Location */}
            {(user.state || user.country) && (
              <div className="flex items-start space-x-2">
                <MdLocationOn className="text-[#36A398] mt-0.5" size={20} />
                <div className="text-gray-600">
                  {user.state && (
                    <div>
                      <strong>State:</strong> {user.state}
                    </div>
                  )}
                  {user.country && (
                    <div>
                      <strong>Country:</strong> {user.country}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Address */}
            {user.address && (
              <div className="flex items-start space-x-2">
                <MdLocationOn className="text-[#36A398] mt-0.5" size={20} />
                <div className="text-gray-600">
                  <strong>Address:</strong>
                  <br />
                  {user.address}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <button
              className="flex-1 py-3 px-6 bg-[#36A398] text-white font-semibold rounded-lg hover:bg-[#2d8a7d] transition-colors duration-200"
              onClick={handleConnect}
            >
              Connect
            </button>
            <button
              className="flex-1 py-3 px-6 border border-[#36A398] text-[#36A398] font-semibold rounded-lg hover:bg-[#36A398] hover:text-white transition-colors duration-200"
              onClick={() => {
                console.log("Sending message to:", user.fullname || user.name);
                // Add your message logic here
              }}
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MateList = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="w-full lg:w-[85%] mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-32">
          {posibleMatch.map((user, index) => (
            <MateCard
              key={user.id || index}
              user={user}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
};

const MateCard = ({ user, onViewProfile }) => {
  const age = calculateAge(user.dob);

  const handleConnect = () => {
    toast.success("Mate connected successfully!");
  };

  return (
    <div className="w-full my-5">
      <div className="w-full border rounded-lg relative group overflow-hidden hover:drop-shadow-sm hover:bg-white mb-2 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={user.image}
            alt={user.fullname || user.name}
            className="object-cover h-40 w-full rounded-t-lg transition duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        <div className="px-4 py-6 w-full grid gap-3">
          <h2 className="text-lg font-semibold text-black text-left truncate">
            {user.fullname || user.name || "Anonymous"}
          </h2>

          <div className="flex items-center space-x-4">
            <p className="text-[15px] font-semibold text-gray-800">
              Age:
              <span className="text-gray-700 font-normal text-[15px] ml-1">
                {age}
              </span>
            </p>

            <p className="text-[15px] font-semibold text-gray-800">
              Gender:{" "}
              <span className="text-gray-700 font-normal text-[15px] ml-1">
                {user.gender}
              </span>
            </p>
          </div>

          <div className="w-full grid grid-cols-3 gap-3 mt-4">
            <div className="col-span-2">
              <button
                className="py-2.5 px-5 w-full border font-semibold text-base cursor-pointer rounded-md text-white bg-[#36A398] hover:bg-[#2d8a7d] transition-colors duration-200"
                type="button"
                onClick={handleConnect}
              >
                Connect
              </button>
            </div>
            <div className="col-span-1 flex justify-end items-center">
              <button
                className="p-2.5 border font-semibold text-base cursor-pointer rounded-full border-[#36A398] hover:bg-[#36A398] hover:text-white transition-colors duration-200 flex justify-center items-center"
                type="button"
                onClick={() => onViewProfile(user)}
              >
                <MdOutlineRemoveRedEye size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateList;
