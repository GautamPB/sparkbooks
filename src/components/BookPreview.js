import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Button } from '@material-ui/core'
import '../styles/BookPreview.css'
import db from '../firebase'

const BookPreview = ({ id, title, image, author, rating, price }) => {
    return (
        <div className="bookPreview">
            <div className="book__image">
                <img src={image} alt="" />
            </div>

            <div className="book__details">
                <Link to={'/book/' + title} className="book__link">
                    <h2>{title}</h2>
                </Link>

                <p>{author}</p>

                <div className="book__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>

                <h3>₹ {price}</h3>
            </div>
        </div>
    )
}

export default BookPreview
