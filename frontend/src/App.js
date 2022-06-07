import './App.css';
import bot from "./images/leopold.png";
import refresh from "./images/refresh.png";
import sendButton from "./images/send-button.png";
import React, {useState, useEffect } from 'react';

function App() {
  const [initialData, setInitialData] = useState([{}])

  function refreshPage() {
    window.location.reload(false);
  } 

  useEffect(() => {
        fetch('/api').then(response => response.json()
        ).then(data => setInitialData(data))
    }, [])

  return (
    <div>
      <div className="card-container">
        <header>
          <p className='chat-name'>Leopold</p><br/>
          <p className='status'>Active now</p>
        <img className="refresh" onClick={refreshPage} src={refresh} alt="Refresh" />
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
            {initialData.mood}
        </div>
        <form action="/input">
          <input type="text" className='input' placeholder='say something'/>
          <button type="submit"> <img className="send-button" src={sendButton} alt="Send" /></button>
        </form>
      </div>
      <img className="bot" src={bot} alt="Robot" />
    </div>
  );
}

export default App;
