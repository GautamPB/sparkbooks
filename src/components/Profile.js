import React, { useEffect } from 'react'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'
import '../styles/Profile.css'
import { Button } from '@material-ui/core'

const Profile = () => {
    const [{ user }] = useStateValue()

    const history = useHistory()

    const handleLogout = () => {
        window.location.reload() //refreshes the page, logging out user.
    }

    useEffect(() => {
        if (!user) {
            history.push('/')
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
                        <Button>View Orders</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
