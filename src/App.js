import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import './App.css';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import Staticks from './components/Statics/Statics';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';

function App() {
  const [quizesData, setQuizesData] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/quiz')
      .then(res => res.json())
      .then(data => setQuizesData(data))
  }, []);


  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        {
          path: '/', element: <Home quizesData={quizesData} />,
        },
        {
          path: '/home', element: <Home quizesData={quizesData} />,
        },
        {
          path: "quiz/:id", element: <Quiz />, loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }
        },
        {
          path: "quiz/:id", element: <Quiz />, loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/`)
          }
        },
        { path: '/blog', element: <Blog /> },
        {
          path: '/staticks', element: <Staticks />,
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/`)
          }
        },
      ]
    },
    {
      path: "*", element: (

        <>
          <Header />
          <div className='text-4xl text-red-600 font-extrabold h-screen flex items-center justify-center' > 404 Error!</div>
          <Footer />
        </>

      )
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
