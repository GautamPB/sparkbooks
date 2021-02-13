import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/BookPreview.css'

const HomeBook = ({ title, image, author, rating, price }) => {
    return (
        <div className="bookPreview">
            <div className="book__image">
                <img src={image} alt=""></img>
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

export default HomeBook
