import React from 'react'
import '../styles/HomeButton.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const HomeButton = ({ author }) => {
    return (
        <div className="home_button">
            <Link className="button__link" to={'/authors/' + author}>
                <Button>{author}</Button>
            </Link>
        </div>
    )
}

export default HomeButton
