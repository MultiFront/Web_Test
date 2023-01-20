import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
 
function App () {
    const [message, setMessage] = useState("");
 
    useEffect(() => {
        fetch('/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])
    return (
        <div className="App">
            <p>유나 commit test</p>
        </div>
    )
}
 
export default App;