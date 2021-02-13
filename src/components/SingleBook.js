import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/SingleBook.css'

const SingleBook = () => {
    const { data } = useParams()

    const rating = 5

    return (
        <div className="singleBook">
            <div className="singleBook__image">
                <img
                    src="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
                    alt=""
                />
            </div>

            <div className="singleBook__details">
                <h1>{data}</h1>
                <p>Book Author</p>

                <div className="book__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>

                <h3>₹ 800.00</h3>
            </div>
        </div>
    )
}

export default SingleBook
