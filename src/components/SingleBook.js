import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import '../styles/SingleBook.css'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const SingleBook = () => {
    const { data } = useParams()

    const history = useHistory()

    const [{ user }] = useStateValue()
    const [{ path }, dispatch] = useStateValue()
    const [{ cart }, cartFunction] = useStateValue()

    const handleBuy = () => {
        if (!user) {
            const path = window.location.pathname
            dispatch({
                type: actionTypes.SET_PATH,
                path: path,
            })
            history.push('/login')
        } else {
            //add book to cart
            cartFunction({
                type: actionTypes.ADD_TO_CART,
                item: {
                    title: data,
                    author: 'Book Author',
                    price: 800,
                    buyer: 'Customer 1',
                    image:
                        'https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg',
                },
            })
        }
    }

    const rating = 5

    return (
        <div className="singleBook">
            <div className="singleBook__image">
                <img
                    src="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
                    alt="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
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

            <div className="singleBook__buy">
                <Button onClick={handleBuy}>
                    {user
                        ? 'Add to cart'
                        : 'You must be logged in to add to cart. Click to Login.'}
                </Button>
            </div>
        </div>
    )
}

export default SingleBook
