import { useEffect, useState } from 'react';
import './App.css';
import Questionanswer from './component/Questionanswer';
import QuizOver from './component/QuizOver';
import Timer from './component/Timer';
const data= require('./component/Questions.json')


function App() {
  const [questionNumber, setquestionNumber] = useState(1);
  const [timeOut, settimeOut] = useState(false);
  const [earned, setearned] = useState("0 ₹");
  
  const money = [
    { id: 1, price: "1000 ₹" },
    { id: 2, price: "2000 ₹" },
    { id: 3, price: "4000 ₹" },
    { id: 4, price: "8000 ₹" },
    { id: 5, price: "16000 ₹" },
    { id: 6, price: "32000 ₹" },
    { id: 7, price: "64000 ₹" },
    { id: 8, price: "128000 ₹" },
    { id: 9, price: "256000 ₹" },
    { id: 10, price: "512000 ₹" },
    { id: 11, price: "1024000 ₹" },
    { id: 12, price: "2048000 ₹" },
    { id: 13, price: "4096000 ₹" },
    { id: 14, price: "8192000 ₹" },
    { id: 15, price: "16384000 ₹" }
  ].reverse();

  useEffect(()=>{
    questionNumber>1 && setearned(money.find((m) => m.id===questionNumber-1).price)
  },[money,questionNumber])

  return (
    <div className="App">
      <div className="firstContainer">
        {timeOut||questionNumber>15 ? <QuizOver earned={earned} questionNumber={questionNumber}/> : (

          <div className="container">
            <div className="timer">
              <Timer settimeOut={settimeOut} questionNumber={questionNumber}/>
            </div>
            <div className='qncontainer'>
              <Questionanswer
                data={data}
                questionNumber={questionNumber}
                settimeOut={settimeOut}
                setquestionNumber={setquestionNumber}
              />
            </div>
          </div>
        )}
      </div>
      <div className="secondContainer">
        <ul className="moneylist">
          {money.map((m) => (
            <li key={m.id} className={questionNumber === m.id ? "moneylistitem active" : "moneylistitem"}>
              <span id='item1'>{m.id} </span>
              <span id='item2'>{m.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
