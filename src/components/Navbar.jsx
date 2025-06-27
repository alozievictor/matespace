import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaRegUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseAppContext } from "../context/context";

const Navbar = () => {
  const { User, setUser } = UseAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear user state
    toast.success("Logged out successfully");
    navigate("/login"); // Redirect to login screen
  };

  const MatchNavigate = () => {
    if (!User) {
      toast.error("You have to sign in!!");
    } else {
      navigate("/match/me");
    }
  };

  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth <= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { to: "/about", label: "About" },
    { to: "/service", label: "Services" },
    { to: "/contact", label: "Contact us" },
  ];

  const [showComponent, setShowComponent] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    setShowComponent(false);

    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentUrl]);

  return (
    <header
      className={`fixed top-0 z-50 drop-shadow-sm  ${
        scrolling
          ? "w-full bg-white shadow-md"
          : "bg-white shadow w-full border"
      } `}
    >
      <div
        className={`w-full  top-0 ${
          scrolling
            ? "h-[10vh] md:w-[80%] mx-auto"
            : "h-[10vh] md:w-[80%] mx-auto"
        }`}
      >
        <div className="w-full mx-auto px-2 flex justify-between items-center">
          {windowWidth > 768 ? (
            <Link to="/" className="flex items-center text-black md:pt-3.5">
              <h2 className="ml-2 text-xl font-medium ">
                Mate
                <span className="text-white pr-4 pb-2 pt-1 rounded-sm bg-[#36A398] ml-1">
                  Space
                </span>
              </h2>
            </Link>
          ) : (
            <Link to="/" className="pt-1 md:pt-0">
              <h2 className="ml-2 text-xl md:mt-2 font-medium ">
                Mate
                <span className="text-white pr-4 rounded-full bg-[#36A398] ml-1">
                  Space
                </span>
              </h2>
            </Link>
          )}

          {windowWidth > 768 && (
            <div className="flex flex-col items-center md:flex-row md:space-x-8 py-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth="true"
                  className={`text-[17px] font-normal pt-2 focus:outline-none hover:font-normal cursor-pointer hover:text-[#36A398] transition duration-300 ${
                    scrolling ? "text-black " : "text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <div className="hidden md:flex mt-2.5 items-center space-x-4 sm:hidden">
            <button
              type="button"
              onClick={MatchNavigate}
              className={`py-2.5 px-5 border font-semibold text-base cursor-pointer rounded-md text-white bg-[#36A398]`}
            >
              Find Mate
            </button>

            <button
              type="button"
              onClick={() => navigate("/auth")}
              className={`${
                User ? "hidden" : "block"
              } py-2.5 px-5 font-semibold text-base cursor-pointer rounded-md text-[#36A398] border border-[#36A398]`}
            >
              Log in
            </button>

            <Link
              to="/user/profile"
              className={`${
                !User ? "hidden" : "block"
              } p-3 font-semibold text-base cursor-pointer rounded-full drop-shadow-md border bg-slate-100 flex justify-center items-center`}
              type="button"
            >
              <FaRegUser size={20} color="black" />
            </Link>
          </div>

          <div className="md:hidden mr-4 pt-5" onClick={handleClick}>
            {!nav ? <FaBars className="w-6" /> : <FaTimes className="w-6" />}
          </div>
        </div>

        <div
          className={
            !nav
              ? "hidden"
              : "absolute bg-white w-full h-[100vh] drop-shadow-sm px-8 py-5"
          }
        >
          <ul>
            {links.map((link) => (
              <li
                key={link.to}
                className="border-b-2 border-zinc-100 w-full text-center py-5 cursor-pointer hover:text-[#f39c12] transition duration-300"
              >
                <Link
                  onClick={handleClose}
                  to={link.to}
                  smooth={true}
                  duration={500}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
