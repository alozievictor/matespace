import React from "react";
import { questions } from "./QuestionList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (
      currentQuestion < questions.length - 1 &&
      userAnswers[currentQuestion]
    ) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      toast.error("Please select an option before proceeding.");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswers[currentQuestion]) {
      console.log("User Answers:", userAnswers);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Answers submitted successfully!");
        navigate("/match/mates");
      }, 8000);
    } else {
      toast.error("Please select an option before proceeding.");
    }
  };

  if (!questions[currentQuestion] || isLoading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <div className="w-full lg:w-[70%] mx-auto ">
        <div className="max-w-3xl mx-auto p-8 ">
          <h2 className="text-lg text-gray-500 font-medium mb-4">
            Question {currentQuestion + 1} / {questions.length}
          </h2>
          <p className="mb-6 text-[25px] text-black font-semibold ">
            {questions[currentQuestion]?.text}
          </p>
          <div className="grid gap-2">
            {questions[currentQuestion]?.options.map((option, index) => (
              <label
                key={index}
                className={`px-2 py-3 mt-3 rounded cursor-pointer flex items-center text-[17px] ${
                  userAnswers[currentQuestion] === option
                    ? "bg-[#C7E9E9] text-black font-semibold"
                    : "bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  className="mr-2 w-5 h-5 text-[#C7E9E9] bg-[#36A398]"
                  checked={userAnswers[currentQuestion] === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="flex max-w-3xl mx-auto mt-7 rounded-md p-6">
          <div className={` ${currentQuestion === 0 ? "justify-end " : "justify-between"}  flex  w-full`}>
            <button
              type="button"
              className={` ${
                currentQuestion === 0 ? "hidden" : "block"
              } px-10 py-2.5 border border-[#36A398] drop-shadow-sm text-[#36A398] font-semibold text-base rounded-md cursor-pointer`}
              disabled={currentQuestion === 0}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              type="button"
              className={`${
                currentQuestion < questions.length - 1
                  ? "bg-[#36A398] "
                  : "bg-green-600"
              } px-10 py-2.5  drop-shadow-sm text-white font-semibold text-base rounded-md cursor-pointer`}
              onClick={
                currentQuestion < questions.length - 1
                  ? handleNext
                  : handleSubmit
              }
            >
               {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
