import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Options from "../Options/Options";
import "./QuizQuestions.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizQuestions = ({ questions }) => {
  const { question, options, correctAnswer } = questions;

  // Fire Toast To Show Quiz Ans  on Click ing Eye
  const showAns = () => {
    toast.info(`Correct Ans: ${correctAnswer}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="  ">
      <div className="question_header flex justify-between bg-violet-400 p-5 my-3 text-white">
        <li className=" w-full">
          {questions.key} {question.split("<p>")}
        </li>
        <EyeIcon className="w-6" onClick={showAns} />
      </div>
      <div className="options grid md:grid-cols-2 gap-3 rounded-md ">
        {options.map((option, idx) => (
          <Options key={idx} 
           option={option} correctAnswer={correctAnswer} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuizQuestions;
