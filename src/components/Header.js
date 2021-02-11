import React from 'react'
import '../styles/Header.css'
import logo from '../pictures/logo.png'
import { Avatar } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import CreateIcon from '@material-ui/icons/Create'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar src={logo} />
                <div className="header__leftText">
                    <h2>SparkBooks</h2>
                    <p>Read for Pleasure</p>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option">
                    <HomeIcon />
                    <p>Home</p>
                </div>

                <div className="header__option">
                    <InfoIcon />
                    <p>About</p>
                </div>

                <div className="header__option">
                    <CreateIcon />
                    <p>Authors</p>
                </div>

                <div className="header__option">
                    <LibraryBooksIcon />
                    <p>Collection</p>
                </div>
            </div>

            <div className="header__right">
                <Avatar />
                <h4>Username</h4>
            </div>
        </div>
    )
}

export default Header
