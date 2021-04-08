import React, { useEffect } from 'react'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'
import '../styles/Profile.css'
import { Button } from '@material-ui/core'
import { actionTypes } from './reducer'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [{ user }, userFunction] = useStateValue()

    const [{ path }, dispatch] = useStateValue()

    const history = useHistory()

    const handleLogout = (e) => {
        e.preventDefault()
        // window.location.reload() //refreshes the page, logging out user.
        userFunction({
            user: null,
            type: actionTypes.LOGOUT_USER,
        })
        history.push('/')
    }

    useEffect(() => {
        if (!user) {
            dispatch({
                type: actionTypes.SET_PATH,
                path: '/',
            })
            history.push(path)
        }
    }, [])

    return (
        <div className="profile">
            <h1>User Profile</h1>

            <div className="user__profile">
                <div className="profile__picture">
                    <img src={user ? user.photoURL : ''} alt="" />
                </div>

                <div className="profile__details">
                    <h2>Username: {user ? user.displayName : ''}</h2>
                    <h2>Email: {user ? user.email : ''}</h2>

                    <div className="profile__buttons">
                        <Button onClick={handleLogout}>Logout</Button>
                        <Link
                            to={user ? '/orders/' + user.displayName : '/'}
                            className="button__link"
                        >
                            <Link
                                to={user ? '/orders/' + user.displayName : '/'}
                                className="button__link"
                            >
                                <Button>View Orders</Button>
                            </Link>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
