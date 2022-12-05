import "../../Quiz/QuizQuestions/QuizQuestions.css";

import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Options = ({ option, correctAnswer }) => {
  const setQuiz = (e) => {
    const quizAns = e.target.textContent;

    if (quizAns === correctAnswer) {
      toast.success(" Correct Ans !", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        autoClose: 3000,
      });
    } else {
      toast.error("Owh Snap! Try Again!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    }
  };
  return (
    <div className="quiz_option flex border text-center justify-center">
      <p
        className="m-0  w-full hover:bg-slate-100 p-4 duration-700"
        onClick={ setQuiz }
      >
        {option}
      </p>
    </div>
  );
};

export default Options;
