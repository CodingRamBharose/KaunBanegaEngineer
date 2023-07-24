import React from 'react'

function QuizOver({earned,questionNumber}) {
  return (
    <div className='QuizOver'>
      <h2>
        You Solve {questionNumber-1} Questions
      </h2>
      <h1>
      You Earned : <span>
        {earned}
        </span>
      </h1>
    </div>
  )
}

export default QuizOver;
