import React, { useEffect } from "react";
import { UseAppContext } from "../context/context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { openDB } from "idb";
import Modal from "./Modal"; // Assuming you have a Modal component

// Initialize IndexedDB
const initDB = async () => {
  return openDB("MateSpaceDB", 2, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (oldVersion < 1) {
        db.createObjectStore("users", { keyPath: "email" });
      }
      if (oldVersion < 2) {
        db.createObjectStore("profile", { keyPath: "id", autoIncrement: true });
      }
    },
  });
};

// Utility functions for IndexedDB
const addUser = async (user) => {
  try {
    const db = await initDB();
    console.log("Adding user to IndexedDB:", user);
    await db.add("users", user);
    console.log("User added successfully");
  } catch (error) {
    console.error("Error adding user to IndexedDB:", error);
    throw error;
  }
};

const getUser = async (email) => {
  const db = await initDB();
  return await db.get("users", email);
};

// Utility function to generate OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Move saveUserProfileOnLoginOrRegister to the top level
const saveUserProfileOnLoginOrRegister = async (user) => {
  const db = await initDB();
  const existingProfile = await db.get("profile", 1);
  if (!existingProfile) {
    await db.put("profile", {
      id: 1,
      fullname: user.username || "",
      email: user.email || "",
      phone: "",
      address: "",
      gender: "",
      dob: "",
      country: "",
      state: "",
    });
  }
};

const Auth = () => {
  const [showTab, setShowTab] = React.useState({
    Login: true,
    Register: false,
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="w-[95%] md:w-[60%] lg:w-[30%] mx-auto">
        <div className="w-full flex justify-start items-center px-3">
          <div className="w-full md:w-[70%] mx-auto">
            <ul className="flex justify-between items-center gap-3">
              <li className="text-sm p-1 cursor-pointer">
                <button
                  //   role="button"
                  className={`${
                    showTab.Login
                      ? "bg-[#C7E9E9] h-[40px] text-[#000] font-medium text-base capitalize py-2 px-10 rounded"
                      : "text-[#545454] font-norml text-base"
                  }`}
                  id="tab-0"
                  data-toggle="tab"
                  href="#"
                  onClick={() =>
                    setShowTab((prev) => ({
                      ...prev,
                      Login: true,
                      Register: false,
                    }))
                  }
                >
                  Login
                </button>
              </li>
              <li className="text-sm p-1 cursor-pointer">
                <button
                  //   role="button"
                  className={`${
                    showTab.Register
                      ? "bg-[#C7E9E9] h-[40px] text-[#000] font-medium text-base capitalize py-2 px-10 rounded"
                      : "text-[#545454] font-norml text-base"
                  }`}
                  id="tab-0"
                  data-toggle="tab"
                  href="#"
                  onClick={() =>
                    setShowTab((prev) => ({
                      ...prev,
                      Login: false,
                      Register: true,
                    }))
                  }
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full my-5">
          <>
            {showTab.Login && <Login />}
            {showTab.Register && <Register />}
          </>
        </div>
      </div>
    </div>
  );
};

export default Auth;

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = UseAppContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate("/dashboard");
    }
  }, [setUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const HandleLogin = async (e) => {
    e.preventDefault();

    const email = formData.email.trim();
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    const formattedEmail = email.toLowerCase();

    if (formData.password.length < 4) {
      toast.error("Password must be at least 4 characters long.");
      return;
    }

    try {
      setIsLoading(true);
      const user = await getUser(formattedEmail);

      if (!user || user.password !== formData.password) {
        toast.error("Invalid email or password.");
        return;
      }

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));

      // Save user profile in IndexedDB
      await saveUserProfileOnLoginOrRegister(user);

      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col justify-center pt-0">
      <div className="my-auto mb-auto flex flex-col">
        <div>
          <form noValidate className="mb-4">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <label className="text-zinc-950 font-normal" htmlFor="email">
                  Email
                </label>
                <input
                  className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="text-zinc-950 mt-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {/* Updated Login Button with Spinner */}
              <button
                onClick={HandleLogin}
                className="mt-2 flex w-full items-center justify-center rounded-xl px-4 py-3 text-base font-medium text-white bg-[#36A398]"
                type="submit"
              >
                {isLoading ? (
                  <div className="loader border-t-transparent border-white border-4 w-5 h-5 rounded-full animate-spin"></div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <div className="flex justify-between items-center">
            <p>
              <a
                href="/dashboard/signin/forgot_password"
                className="font-medium text-zinc-950 text-sm underline hover:text-red-600"
              >
                Forgot your password?
              </a>
            </p>

            <p>
              <a
                href="/dashboard/signin/signup"
                className="font-medium text-zinc-950 text-sm"
              >
                Don't have an account? Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated Register Component with OTP Verification
export const Register = () => {
  const navigate = useNavigate();
  const { setUser } = UseAppContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = React.useState("");
  const [generatedOtp, setGeneratedOtp] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const HandleRegister = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      toast.error("All fields are required.");
      return;
    }
    if (formData.password.length < 4) {
      toast.error("Password must be at least 4 characters long.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const formattedEmail = formData.email.toLowerCase();

    try {
      setIsLoading(true);
      console.log("Checking if user already exists:", formattedEmail);
      const existingUser = await getUser(formattedEmail);
      if (existingUser) {
        toast.error("Email is already registered.");
        return;
      }

      console.log("User does not exist, generating OTP");
      const otp = generateOTP();
      setGeneratedOtp(otp);
      setIsModalOpen(true);
      console.log("OTP generated and modal opened:", otp);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtpAndRegister = async () => {
    if (otp !== generatedOtp) {
      toast.error("Invalid OTP.");
      return;
    }

    try {
      setIsLoading(true);
      console.log("Verifying OTP and registering user:", formData);
      await addUser({ ...formData, email: formData.email.toLowerCase() });
      const user = {
        username: formData.username,
        email: formData.email.toLowerCase(),
      };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));

      // Save user profile in IndexedDB
      await saveUserProfileOnLoginOrRegister(user);

      toast.success("Registration successful");
      setIsModalOpen(false);
      navigate("/");
    } catch (error) {
      toast.error("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    console.log("Modal state updated:", isModalOpen);
  }, [isModalOpen]);

  return (
    <div className="mx-auto flex w-full flex-col justify-center pt-0">
      <div className="my-auto mb-auto flex flex-col">
        <div>
          <form noValidate className="mb-4">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <label className="text-zinc-950 font-normal" htmlFor="username">
                  Username
                </label>
                <input
                  className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  id="username"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <label className="text-zinc-950 font-normal" htmlFor="email">
                  Email
                </label>
                <input
                  className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="text-zinc-950 mt-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={HandleRegister}
                className="mt-2 flex w-full items-center justify-center rounded-xl px-4 py-3 text-base font-medium text-white bg-[#36A398]"
                type="submit"
              >
                {isLoading ? (
                  <div className="loader border-t-transparent border-white border-4 w-5 h-5 rounded-full animate-spin"></div>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className=" inset-0 bg-black/70 backdrop-blur-sm fixed flex items-center justify-center">
          <div className="modal-content w-[30%] bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Verify OTP</h2>
            <p className="mb-2">
              Your OTP is: <strong>{generatedOtp}</strong>
            </p>
            <input
              className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-500 focus:outline-0"
              placeholder="Enter OTP"
              type="text"
              value={otp}
              onChange={handleOtpChange}
            />
            <button
              onClick={verifyOtpAndRegister}
              className="mt-2 flex w-full items-center justify-center rounded-xl px-4 py-3 text-base font-medium text-white bg-[#36A398]"
              type="button"
            >
              {isLoading ? (
                <div className="loader border-t-transparent border-white border-4 w-5 h-5 rounded-full animate-spin"></div>
              ) : (
                "Verify OTP"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
