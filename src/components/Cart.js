import React from 'react'
import '../styles/Cart.css'
import CartItem from './CartItem'
import { useStateValue } from './StateProvider'

const Cart = () => {
    const [{ cart }] = useStateValue()

    return (
        <div className="cart">
            {cart?.length === 0 ? (
                <div className="cart__empty">
                    <h1>
                        You have no items in your Cart! Click the add to cart
                        button to see them here!
                    </h1>
                </div>
            ) : (
                <div className="cart__items">
                    <h1>Your Cart</h1>
                    {cart?.map((item) => (
                        <CartItem
                            title={item.title}
                            image="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
                            price={800}
                            rating={5}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart
