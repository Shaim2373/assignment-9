import React from "react";
import Quizes from "../Quizes/Quizes";

const Home = ({ quizesData }) => {
    const quizData = quizesData.data;
    return (
        <div>
            <header>
                <div className="hero-section  flex md:flex-row flex-col justify-between items-center mx-6 my-6">
                    <p className="text-3xl font-semibold">
                        If you write a book about Failure and it doesn't sell, is it called
                        Success
                    </p>
                    <img
                        className="w-96"
                        src="https://img.freepik.com/free-vector/thank-you-design-concept-with-cute-cartoon-funny-girl-holding-bouquet-flowers-flat_1284-58852.jpg?w=2000"
                        alt="Super-thank-you-bro"
                        border="0"
                    />
                </div>
            </header>
            <div className="grid md:grid-cols-2 gap-3 items-center justify-center mx-6 my-6">
                {quizData.map((data) => (
                    <Quizes key={data.id} quizes={data} />
                ))}
            </div>
        </div>
    );
};

export default Home;
