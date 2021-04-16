import React from 'react'
import '../styles/HomeButton.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const HomeButton = ({ category }) => {
    return (
        <div className="home_button">
            <Link className="button__link" to={'/category/' + category}>
                <Button>{category}</Button>
            </Link>
        </div>
    )
}

export default HomeButton
