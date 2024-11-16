import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Question from "../components/Question";

const Match = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [question, setQuestion] = React.useState(false);

  const HandleQuestion = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setQuestion(true);
    }, 5000);
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full">

      <div className="w-full lg:w-[80%] mx-auto py-32">
        {!question && !isLoading ? (
          <div className="max-w-2xl mx-auto rounded-md drop-shadow md:p-5 mt-5 bg-white border grid gap-3">
            <h2 className="text-[21px] text-black font-semibold text-center py-5">
              Discover Your Ideal Match
            </h2>
            <p className="text-[17px] text-gray-800 text-center">
              To ensure we connect you with the most compatible match, we kindly
              ask you to share some insights into your lifestyle, interests, and
              preferences.
            </p>
            <div className="flex justify-center items-center mt-5 w-full">
              <button
                onClick={() => HandleQuestion()}
                className="py-3 text-center w-36 font-semibold text-base border cursor-pointer rounded-md text-white bg-[#36A398]"
                type="button"
              >
                Get Started
              </button>
            </div>
          </div>
        ) : (
          <Question />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Match;
