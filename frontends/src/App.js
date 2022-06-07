import './App.css';
import bot from "./images/leopold.png";
import refresh from "./images/refresh.png";
import React, {useState, useEffect } from 'react';

function App() {
   const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/home').then(result => { result.json(); console.log(result) }
        ).then(
        data => {
            setData(data)
            console.log(data)
            }
        )
        .catch(error => {
            console.error("error", error);
        })
    },[])

  return (
    <div>
      <div className="card-container">
        <header>
        <img className="refresh" src={refresh} ></img>
        </header>
        <div className="card1">
            hello
        </div>
        <div className="card2">
            hi
        </div>
        <div className="card1">
            how are you?
        </div>
        <div className="card2">
            good, you?
            I hope you are amazing?
        </div>
      </div>
      <img className="bot" src={bot} ></img>
    </div>
  );
}

export default App;
