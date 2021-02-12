import React from 'react'
import '../styles/Login.css'
import logo from '../pictures/logo_symbol.png'
import { Button } from '@material-ui/core'

const Login = () => {
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
                <Button className="login__button">Login</Button>
            </div>
        </div>
    )
}

export default Login
