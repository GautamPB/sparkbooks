import React from 'react'
import '../styles/CartItem.css'
import { Button } from '@material-ui/core'
import db from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

const CartItem = ({ id, title, image, price, rating, author }) => {
    const [, cartFunction] = useStateValue()

    const removeFromCart = () => {
        cartFunction({
            type: actionTypes.REMOVE_FROM_CART,
            title: title,
        })
    }

    return (
        <div className="cartItem">
            <div className="cartItem__image">
                <img
                    src={image}
                    alt="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
                />
            </div>
            <div className="cartItem__details">
                <h1>{title}</h1>
                <p>{author}</p>
                <div className="cartItem__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
                <p>₹ {price}.00</p>

                <div className="cartItem__button">
                    <Button onClick={removeFromCart}>Remove from Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
