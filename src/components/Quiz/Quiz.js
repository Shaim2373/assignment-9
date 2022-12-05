import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './QuizQuestions/QuizQuestions';

const Quiz = () => {
    const data  = useLoaderData();
    const quizQuestions = data.data.questions;
    
    
    
    
    // console.log(quizQuestions);
    
    return (
        <div>
        <p className='text-center font-bold text-xl'>Quiz Name: {data.data.name}</p>
        {
            quizQuestions.map((question, idx) => <QuizQuestions key={question.id} questions={question} />
            )
        }
        </div>
    );
};

export default Quiz;
