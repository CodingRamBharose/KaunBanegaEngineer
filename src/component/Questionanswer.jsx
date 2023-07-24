import React, { useEffect, useState } from 'react'

function Questionanswer({ data, settimeOut, questionNumber, setquestionNumber }) {

  const [question, setquestion] = useState(null);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [className, setclassName] = useState("answers");

  useEffect(() => {
    setquestion(data[questionNumber-1]);

  }, [data, questionNumber]);

  const handleOnClick=(a)=>{
    setselectedAnswer(a);
    setclassName("answers active");
    setTimeout(() => {
      setclassName(a.correct ? "answers correct" : "answers wrong")
    }, 2000);
    setTimeout(() => {
      if(a.correct){
        setquestionNumber((prev)=>prev + 1);
        setselectedAnswer(null)
      }
      else{
        settimeOut(true)
      }
    }, 5000);
  }

  
  return (
    <>
    
      <div className="question">
        {question?.question}
      </div>
      <div className="answer">
        {question?.answers.map((a,index)=>(
          <div key={index} className={selectedAnswer===a ? className : "answers"} onClick={()=>(handleOnClick(a))}>{a.answer} </div>
        ))}  
      </div>
    </>
  )
}

export default Questionanswer;
