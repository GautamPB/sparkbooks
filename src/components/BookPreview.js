import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/BookPreview.css'

const BookPreview = ({ id, title, image, author, rating, price }) => {
    return (
        <div className="bookPreview">
            <div className="book__image">
                <Link to={'/book/' + title} className="image__link">
                    <img src={image} alt="" />
                </Link>
            </div>

            <div className="book__details">
                <Link to={'/book/' + title} className="book__link">
                    <h2>{title}</h2>
                </Link>

                <Link to={'/authors/' + author} className="book__link">
                    <p>{author}</p>
                </Link>

                <div className="book__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>

                <h3>₹ {price}.00</h3>
            </div>
        </div>
    )
}

export default BookPreview
