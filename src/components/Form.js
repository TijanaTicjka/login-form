import { useState } from 'react';
import './Form.css';

export const Form = () => {
    const[username,setUsername] = useState("");
    const[password, setPassword] = useState("");
    const onChangeUsername = (event) => {
        const usernameUpdated = event.target.value;
        setUsername(usernameUpdated);
    }
    const onChangePassword = (event) => {
        const passwordUpdated = event.target.value;
        setPassword(passwordUpdated)
    }
   
    const showInputValue = () => {
        alert(username + " " + password);
    }
    const deleteInputValue = () => {
        setUsername("");
        setPassword("")
    }

    return (
        <div className="form">
            <h1>LOGIN</h1>
            <form className="log">
                <input className="input" type="text" value = {username} onChange={onChangeUsername} placeholder="username"/>
                <input className="input" type="password" value = {password}onChange={onChangePassword} placeholder="password"/>
                <button className="button" onClick={showInputValue}>Send</button>
                <button className="button reset" onClick={deleteInputValue}>Reset</button>
            </form>
        </div>
    )
}