import './flash.css'

import React, { useState } from'react';
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  },
  {
    id: 4621,
    question: "What hook is used to perform side effects in functional components?",
    answer: "useEffect"
  },
  {
    id: 5190,
    question: "What is the virtual DOM in React?",
    answer: "A lightweight representation of the real DOM"
  },
  {
    id: 6723,
    question: "What is the purpose of a key in React lists?",
    answer: "To help React identify which items have changed, are added, or removed"
  },
 

];

function FlashCards(){
  const [currentQuestion, setCurrentQuestion] = useState(null);
  function handleClick(id){
    setCurrentQuestion(id !== currentQuestion ? id : null);
  }
    return (
      <>
      <h1>Flashcards</h1>
        <div className="flash-card">

            {/*  */}
            {
                questions.map((question) =>(
                    <div className={question.id===currentQuestion ? "FlashCardsList" :"none"} 
                    key={question.id}  
                     
                    onClick={()=>handleClick(question.id)}>

                      <p>{question.id===currentQuestion ? question.answer : question.question}</p>
                     
                    </div>
                ))
            }
        </div>
      </>
    )
}
export default FlashCards;