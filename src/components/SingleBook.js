import { Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import '../styles/SingleBook.css'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import db from '../firebase'

const SingleBook = () => {
    const { data } = useParams()

    const [book, setBook] = useState([])

    const history = useHistory()

    const [{ user }] = useStateValue()
    const [, dispatch] = useStateValue()
    const [, cartFunction] = useStateValue()

    useEffect(() => {
        db.collection('books')
            .where('title', '==', data)
            .onSnapshot((snapshot) =>
                setBook(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    })

    const handleBuy = () => {
        if (!user) {
            const path = window.location.pathname
            dispatch({
                type: actionTypes.SET_PATH,
                path: path,
            })
            history.push('/login')
        } else {
            //add book to cart and to cart collection.
            cartFunction({
                type: actionTypes.ADD_TO_CART,
                item: {
                    id: book[0].data.id,
                    title: book[0].data.title,
                    author: book[0].data.author,
                    price: book[0].data.price,
                    buyer: user.displayName,
                    image: book[0].data.image,
                    rating: book[0].data.rating,
                },
            })

            db.collection('cart').add({
                id: book[0].data.id,
                title: book[0].data.title,
                author: book[0].data.author,
                price: book[0].data.price,
                buyer: user.displayName,
                image: book[0].data.image,
                rating: book[0].data.rating,
            })
        }
    }

    return (
        <div className="singleBook">
            <div className="singleBook__image">
                <img
                    src={book.map((Book) => Book.data.image)}
                    alt="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
                />
            </div>

            <div className="singleBook__details">
                <h1>{book.map((Book) => Book.data.title)}</h1>
                <p>{book.map((Book) => Book.data.author)}</p>

                <div className="book__rating"></div>

                <h3>₹ {book.map((Book) => Book.data.price)}</h3>
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
