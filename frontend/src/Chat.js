import sendButton from "./images/send-button.png";
import React, {useState, useEffect} from 'react';

function Chat() {
    const [initialData, setInitialData] = useState([{}]);
    const [input, setInput] = useState('');
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        fetch('/api').then(response => response.json()
        ).then(data => setInitialData(data))
    }, []);

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setChatList([...chatList, <div className="card1" key={chatList.length}>{input}</div>]);
        setInput("");
    }

    return (
        <div>
            <div className="card2">
                {initialData.mood}
            </div> 
            <ul>{chatList}</ul>
            <form onSubmit={submitHandler}>
                <input type="text" className='input' autoFocus={true} value={input} onChange={inputChangeHandler} placeholder='Say something'/>
                <button type="submit"> <img className="send-button" src={sendButton} alt="Send" /></button>
            </form>
        </div>
    )
}

export default Chat;
