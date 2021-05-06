import { Button } from '@material-ui/core';
import React from 'react';
import '../Login/Login.css';
import  { auth , provider } from "../firebase"
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

function Login() {
    const [user, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log("Testing",user);

        }
            
            ).catch(error=> alert(error.message))
    };
    return (
        <div className="login">
            <div className="login__container">
            <img
            src="https://www.freepngimg.com/thumb/whatsapp/76995-whatsapp-message-android-internet-free-clipart-hq.png"
            alt=""
            />
            <div className="login__text">
                <h1>Sign in to Whatsapp</h1>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In With Google
            </Button>
            </div>
        </div>
    )
}

export default Login
