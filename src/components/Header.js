import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../pictures/logo.png'
import { Avatar } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

const Header = () => {
    // const [cartItems, setCartItems] = useState([])

    const [{ user }] = useStateValue()

    const history = useHistory()

    const [{ cart }] = useStateValue()

    // if (user) {
    //     db.collection('cart')
    //         .where('buyer', '==', user.displayName)
    //         .onSnapshot((snapshot) =>
    //             setCartItems(
    //                 snapshot.docs.map((doc) => ({
    //                     id: doc.id,
    //                     data: doc.data(),
    //                 }))
    //             )
    //         )
    // }

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    }, [])

    return (
        <div className="header">
            <div className="header__left">
                <Link to="/" className="header__link">
                    <Avatar src={logo} />
                    <div className="header__leftText">
                        <h2>SparkBooks</h2>
                        <p>Read for Pleasure</p>
                    </div>
                </Link>
            </div>

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
                    <Link to="/collection" className="header__link">
                        <LibraryBooksIcon />
                        <p>Collection</p>
                    </Link>
                </div>
            </div>

            <div className="header__right">
                <Link to="/cart" className="header__link">
                    <div className="header__cart">
                        <ShoppingCartIcon />
                        <p>{cart?.length}</p>
                    </div>
                </Link>

                <Link
                    to={user ? '/profile/' + user.displayName : '/login'}
                    className="header__link"
                >
                    <Avatar src={user ? user.photoURL : ''} />
                    <h4>{user ? user.displayName : 'Login'}</h4>
                </Link>
            </div>
        </div>
    )
}

export default Header
