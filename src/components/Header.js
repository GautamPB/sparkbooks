import React from 'react'
import '../styles/Header.css'
import logo from '../pictures/logo.png'
import { Avatar } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import CreateIcon from '@material-ui/icons/Create'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
const Header = () => {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="header">
            <Link to="/" className="header__link">
                <div className="header__left">
                    <Avatar src={logo} />
                    <div className="header__leftText">
                        <h2>SparkBooks</h2>
                        <p>Read for Pleasure</p>
                    </div>
                </div>
            </Link>

            <div className="header__middle">
                <div className="header__option">
                    <Link to="/" className="header__link">
                        <HomeIcon />
                        <p>Home</p>
                    </Link>
                </div>

                <div className="header__option">
                    <Link to="/about" className="header__link">
                        <InfoIcon />
                        <p>About</p>
                    </Link>
                </div>

                <div className="header__option">
                    <Link to="/authors" className="header__link">
                        <CreateIcon />
                        <p>Authors</p>
                    </Link>
                </div>

                <div className="header__option">
                    <Link to="/collection" className="header__link">
                        <LibraryBooksIcon />
                        <p>Collection</p>
                    </Link>
                </div>
            </div>

            <div className="header__right">
                <Link to="/login" className="header__link">
                    <Avatar src={user ? user.photoURL : ''} />
                    <h4>{user ? user.displayName : 'Login'}</h4>
                </Link>
            </div>
        </div>
    )
}

export default Header
