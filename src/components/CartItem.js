import React from 'react'
import '../styles/CartItem.css'

const CartItem = ({ title, image, price, rating }) => {
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
            </div>
        </div>
    )
}

export default CartItem
