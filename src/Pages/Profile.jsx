import React from "react";
import ProfileImg from "../assets/rommie-bg.jpg";
import ProfileDetails from "../components/ProfileDetails";
import { profileData } from "../data";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Profile = () => {
  const user = profileData[0];
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const fileInputRef = React.useRef(null);
  const [input, setInput] = React.useState({
    Image: null,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setInput((prevInput) => ({
      ...prevInput,
      Image: file,
    }));
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setInput((prevInput) => ({
      ...prevInput,
      Image: null,
    }));
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="w-[95%] lg:w-[80%] mx-auto pt-32 pb-5">
        <div className="h-[240px] w-full bg-gradient-to-r rounded-t-md drop-shadow from-[#C7E9E9] to-[#70b8b8]"></div>
        <div className=" lg:flex justify-between items-center px-6 w-full drop-shadow-md rounded-b-md border pb-4">
          <div className="flex items-center space-x-8">
            <div className="parent-profile-pic">
              <img
                className="h-28 w-28 rounded-full"
                src={ProfileImg}
                alt="parent picture"
              />
            </div>
            <div className="flex flex-col max-sm:gap-3">
              <p className="text-black font-bold text-2xl capitalize max-sm:text-center">
                {user?.fullname}
              </p>

              <p className="max-sm:text-center font-normal">
                {user?.occupation}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5 lg:mt-0 gap-[8px] justify-center lg:justify-normal">
            <button
              type="button"
              onClick={handleEditClick}
              className="py-2.5 px-5 border font-medium text-base cursor-pointer rounded-md text-white bg-[#36A398]"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <ProfileDetails userData={profileData} />
      </div>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        <form className="py-10"> 
          <div className="grid xl:grid-cols-2 gap-4 w-full">
            <div className="grid gap-1">
              <label
                htmlFor="photo"
                className="my-2 text-gray-950 font-medium font-[Montserrat] text-lg"
              >
                Profile Photo
              </label>
              <div className="grid gap-1 md:flex items-center md:space-x-10">
                <div className="shrink-0 mt-5 flex flex-wrap gap-2">
                  {input.Image ? (
                    <div className="relative">
                      <img
                        className="h-[80px] w-[80px] object-cover rounded-full cursor-pointer"
                        src={URL.createObjectURL(input.Image)}
                        alt="Selected file"
                        onClick={handleImageClick}
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1"
                        onClick={handleRemoveFile}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="text-black"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div
                      className="h-[80px] w-[80px] flex items-center justify-center border rounded-full cursor-pointer"
                      onClick={handleImageClick}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.3346 13.334H31.668L23.3346 23.334H13.3346C11.5665 23.334 9.87083 24.0364 8.62059 25.2866C7.37035 26.5368 6.66797 28.2325 6.66797 30.0007V60.0006C6.66797 61.7688 7.37035 63.4645 8.62059 64.7147C9.87083 65.9649 11.5665 66.6673 13.3346 66.6673H66.668C68.4361 66.6673 70.1318 65.9649 71.382 64.7147C72.6323 63.4645 73.3346 61.7688 73.3346 60.0006V30.0007C73.3346 28.2325 72.6323 26.5368 71.382 25.2866C70.1318 24.0364 68.4361 23.334 66.668 23.334H56.668L48.3346 13.334Z"
                          stroke="#AEAEAE"
                          strokeOpacity="0.5"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40 53.334C45.5228 53.334 50 48.8568 50 43.334C50 37.8111 45.5228 33.334 40 33.334C34.4772 33.334 30 37.8111 30 43.334C30 48.8568 34.4772 53.334 40 53.334Z"
                          stroke="#AEAEAE"
                          strokeOpacity="0.5"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="grid gap-1">
              <label className="text-zinc-950 font-normal" htmlFor="address">
                Address
              </label>
              <textarea
                className="mr-2.5 mb-2 h-full min-h-[100px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0 resize-none"
                id="address"
                placeholder="Enter your address"
                name="address"
                rows="3"
              ></textarea>
            </div>
            <div className="grid gap-1">
              <label class="text-zinc-950 font-normal" for="email">
                FullName
              </label>
              <input
                class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="email"
                placeholder="Enter fullname"
                type="text"
                autocapitalize=""
                autocomplete="email"
                autocorrect="off"
                name="email"
              />
            </div>
            <div className="grid gap-1">
              <label class="text-zinc-950 font-normal" for="email">
                Email
              </label>
              <input
                class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="email"
                placeholder="Enter email address"
                type="email"
                autocapitalize="none"
                autocomplete="email"
                autocorrect="off"
                name="email"
              />
            </div>
            <div className="grid gap-1">
              <label class="text-zinc-950 font-normal" for="email">
                Phone
              </label>
              <input
                class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="phane"
                placeholder="Enter mobile number"
                type="tel"
                autocapitalize="none"
                autocomplete=""
                autocorrect=""
                name="phone"
              />
            </div>
            <div className="grid gap-1">
              <label class="text-zinc-950 font-normal" for="email">
                Gender
              </label>
              <input
                class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="gender"
                placeholder="Enter gender"
                type="gender"
                autocapitalize="none"
                autocomplete="gender"
                autocorrect="off"
                name="gender"
              />
            </div>
            <div className="grid gap-1">
              <label class="text-zinc-950 font-normal" for="email">
                Date of Birth
              </label>
              <input
                class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="dob"
                placeholder=""
                type="date"
                autocapitalize="none"
                autocomplete=""
                autocorrect="off"
                name=""
              />
            </div>
            <div className="grid gap-1">
              <label class="text-zinc-950 font-normal" for="email">
                Country
              </label>
              <input
                class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="country"
                placeholder="Enter country"
                type="text"
                autocapitalize="none"
                autocomplete=""
                autocorrect="off"
                name="country"
              />
            </div>
            <div className="grid gap-1">
              <label class="text-zinc-950 font-normal" for="email">
                State
              </label>
              <input
                class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                id="state"
                placeholder="Enter state"
                type="text"
                autocapitalize="none"
                autocomplete=""
                autocorrect="off"
                name="state"
              />
            </div>
            
          </div>
          <div className="flex w-full mt-7 rounded-md p-6">
            <div className={`flex items-center justify-between w-full`}>
              <button
                type="button"
                className={`px-10 py-2.5 border border-[#36A398] drop-shadow-sm text-[#36A398] font-semibold text-base rounded-md cursor-pointer`}
              >
                Cancel
              </button>

              <button
                type="button"
                className={`px-10 py-2.5 bg-[#36A398]  drop-shadow-sm text-white font-semibold text-base rounded-md cursor-pointer`}
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
