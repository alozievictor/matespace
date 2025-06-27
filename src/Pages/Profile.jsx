import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../assets/rommie-bg.jpg";
import ProfileDetails from "../components/ProfileDetails";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import { UseAppContext } from "../context/context";
import { openDB } from "idb";

const initDB = async () => {
  return openDB("MateSpaceDB", 3, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (oldVersion < 1) {
        db.createObjectStore("users", { keyPath: "email" });
      }
      if (oldVersion < 2) {
        db.createObjectStore("profile", { keyPath: "id" });
      }
      if (oldVersion < 3) {
        // Check if profile store exists
        let profileStore;
        if (!db.objectStoreNames.contains("profile")) {
          profileStore = db.createObjectStore("profile", { keyPath: "id" });
        } else {
          // Use the transaction parameter instead of creating a new one
          profileStore = transaction.objectStore("profile");
        }

        // Add index if it doesn't exist
        if (!profileStore.indexNames.contains("profilePicture")) {
          profileStore.createIndex("profilePicture", "profilePicture", {
            unique: false,
          });
        }
      }
    },
  });
};

const saveProfile = async (profile) => {
  try {
    const db = await initDB();
    await db.put("profile", profile);
  } catch (error) {
    console.error("Error saving profile:", error);
    throw error;
  }
};

const getProfile = async () => {
  try {
    const db = await initDB();
    return await db.get("profile", 1);
  } catch (error) {
    console.error("Error getting profile:", error);
    return null;
  }
};

const Profile = () => {
  const { User, setUser } = UseAppContext();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [profileData, setProfileData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [formData, setFormData] = React.useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    country: "",
    state: "",
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const profile = await getProfile();
        if (profile) {
          setProfileData(profile);
          setFormData(profile);
        } else if (User) {
          // Fallback to user's registration data if profile is not found
          const defaultProfile = {
            fullname: User.username || User.fullname || "",
            email: User.email || "",
            phone: "",
            address: "",
            gender: "",
            dob: "",
            country: "",
            state: "",
          };
          setFormData(defaultProfile);
          // Create initial profile
          await saveUserProfileOnLoginOrRegister(User);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile data");
      } finally {
        setIsLoading(false);
      }
    };

    if (User) {
      fetchProfile();
    } else {
      setIsLoading(false);
    }
  }, [User]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = { id: 1, ...formData };
      await saveProfile(updatedProfile);
      setProfileData(updatedProfile);
      toast.success("Profile updated successfully");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const saveUserProfileOnLoginOrRegister = async (user) => {
    try {
      const existingProfile = await getProfile();
      if (!existingProfile) {
        const newProfile = {
          id: 1,
          fullname: user.username || user.fullname || "",
          email: user.email || "",
          phone: "",
          address: "",
          gender: "",
          dob: "",
          country: "",
          state: "",
        };
        await saveProfile(newProfile);
        setProfileData(newProfile);
        setFormData(newProfile);
      }
    } catch (error) {
      console.error("Error creating initial profile:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader border-t-transparent border-[#36A398] border-4 w-8 h-8 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-[95%] lg:w-[80%] mx-auto pt-32 pb-5">
        <div className="h-[240px] w-full bg-gradient-to-r rounded-t-md drop-shadow from-[#C7E9E9] to-[#70b8b8]"></div>
        <div className="lg:flex justify-between items-center px-6 w-full drop-shadow-md rounded-b-md border pb-4">
          <div className="flex items-center space-x-8">
            <div className="parent-profile-pic">
              <img
                className="h-28 w-28 rounded-full object-cover"
                src={profileData?.profilePicture || ProfileImg}
                alt="profile picture"
              />
            </div>
            <div className="flex flex-col max-sm:gap-3">
              <p className="text-black font-bold text-2xl capitalize max-sm:text-center">
                {profileData?.fullname || User?.username || "Your Name"}
              </p>
              <p className="max-sm:text-center font-normal">
                {profileData?.occupation || "Your Occupation"}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5 lg:mt-0 gap-[8px] justify-center lg:justify-normal">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="py-2.5 px-5 border font-medium text-base cursor-pointer rounded-md text-white bg-[#36A398] hover:bg-[#2d8a7d] transition-colors"
            >
              Edit Profile
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="py-2.5 px-5 border font-medium text-base cursor-pointer rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
        <ProfileDetails userData={[profileData]} />
      </div>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        <form className="py-10" onSubmit={handleSubmit}>
          <div className="grid xl:grid-cols-2 gap-4 w-full">
            <div className="grid gap-1">
              <label
                className="text-zinc-950 font-normal"
                htmlFor="profilePicture"
              >
                Profile Picture
              </label>
              <input
                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="profilePicture"
                name="profilePicture"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      setFormData((prev) => ({
                        ...prev,
                        profilePicture: reader.result,
                      }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>

            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="email">
                Email
              </label>
              <input
                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="phone">
                Phone
              </label>
              <input
                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="gender">
                Gender
              </label>
              <select
                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 focus:outline-0"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="dob">
                Date of Birth
              </label>
              <input
                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="country">
                Country
              </label>
              <input
                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="state">
                State
              </label>
              <input
                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="address">
                Address
              </label>
              <textarea
                className="mr-2.5 mb-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0 resize-none"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end items-end w-full mt-7">
            <div className={`flex items-center space-x-4`}>
              <button
                type="button"
                className={`px-10 py-2.5 border border-[#36A398] drop-shadow-sm text-[#36A398] font-semibold text-base rounded-md cursor-pointer hover:bg-gray-50 transition-colors`}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-10 py-2.5 bg-[#36A398] drop-shadow-sm text-white font-semibold text-base rounded-md cursor-pointer hover:bg-[#2d8a7d] transition-colors`}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Profile;
