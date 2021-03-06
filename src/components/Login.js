import React from 'react'
import '../styles/Login.css'
import logo from '../pictures/logo_symbol.png'
import { Button } from '@material-ui/core'
import { useStateValue } from './StateProvider'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useHistory } from 'react-router-dom'
import Google from '../pictures/google_logo.png'

const Login = () => {
    const history = useHistory()

    const [, dispatch] = useStateValue()
    const [{ path }] = useStateValue()

    const handleLogin = () => {
        //login logic
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                history.push(path)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login__image">
                <img src={logo} alt="" />
            </div>

            <div className="login__text">
                <h1>SparkBooks</h1>
                <p>Read for Pleasure</p>
            </div>

            <div className="login__button">
                <Button onClick={handleLogin}>
                    <div className="login__logo">
                        <img
                            // src="http://pngimg.com/uploads/google/google_PNG19635.png"
                            src={Google}
                            alt=""
                        />
                    </div>
                    Login in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
