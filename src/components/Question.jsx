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
      <div className="w-full lg:w-[50%] mx-auto ">
        <div className="max-w-2xl mx-auto p-8 bg-white drop-shadow rounded ">
          <h2 className="text-xl font-bold mb-4">
            Question {currentQuestion + 1} / {questions.length}
          </h2>
          <p className="mb-6 text-[17px] ">
            {questions[currentQuestion]?.text}
          </p>
          <div className="grid gap-3">
            {questions[currentQuestion]?.options.map((option, index) => (
              <label
                key={index}
                className={`block mb-2 p-2 rounded cursor-pointer ${
                  userAnswers[currentQuestion] === option
                    ? "bg-[#C7E9E9] text-black"
                    : "bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  className="mr-2 w-4 h-4 text-[#C7E9E9]"
                  checked={userAnswers[currentQuestion] === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end max-w-2xl mx-auto mt-7 drop-shadow-sm bg-white border rounded-md p-6">
          <div className="flex justify-between w-full lg:w-3/6">
            <button
              type="button"
              className="px-10 py-2.5 border border-[#36A398] drop-shadow-sm text-[#36A398] font-medium text-base rounded-md cursor-pointer"
              disabled={currentQuestion === 0}
              onClick={handlePrevious}
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button
                type="button"
                className="px-10 py-2.5 bg-[#36A398] drop-shadow-sm text-white font-medium text-base rounded-md cursor-pointer"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="px-10 py-2.5 bg-green-600 drop-shadow-sm text-white font-medium text-base rounded-md cursor-pointer"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
