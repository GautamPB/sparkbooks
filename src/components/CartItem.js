import React from 'react'
import '../styles/CartItem.css'
import { Button } from '@material-ui/core'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const CartItem = ({ id, title, image, price, rating }) => {
    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            title: title,
        })
        console.log(title)
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
                <div className="cartItem__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
                <p>₹ {price}</p>

                <div className="cartItem__button">
                    <Button onClick={removeFromCart}>Remove from Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
