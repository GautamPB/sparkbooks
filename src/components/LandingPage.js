import React from 'react'
import '../styles/LandingPage.css'
import banner from '../pictures/landing_page_pic.PNG'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import icon from '../pictures/logo.png'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="landingPage__banner">
                <img src={banner} alt="" />
            </div>

            <div className="landingPage__topLeft">
                <fieldset>
                    <legend>SparkBooks</legend>
                    <h4>Read for Pleasure</h4>
                </fieldset>
            </div>

            <div className="landingPage__text">
                <h1>Welcome to SparkBooks</h1>
                <h2>Dear readers,</h2>
                <h3>
                    SparkBooks is a comprehensive online bookstore with a vast
                    collection for every point of knowledge. We believe that
                    books are essential to a healthy culture. We offer
                    tremendous gathering of books in various classification of
                    Crime, Fantasy, Romance and even Academics.
                </h3>

                <h3>
                    Despite our books being second-hand, their condition is
                    top-notch! So, what are you waiting for? Click the button
                    below to check out our collection.
                </h3>
                <Button className="landingPage__button">
                    <Link to="/home" className="landingPage__link">
                        Start Shopping
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default LandingPage
