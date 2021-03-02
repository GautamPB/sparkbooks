import React, { useState } from 'react'
import '../styles/Cart.css'
import CartItem from './CartItem'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutButton from './CheckoutButton'
import db from '../firebase'
import { useHistory } from 'react-router'

const Cart = () => {
    const [{ user }] = useStateValue()

    const [cartItems, setCartItems] = useState([])

    const history = useHistory()

    if (user) {
        db.collection('cart')
            .where('buyer', '==', user.displayName)
            .onSnapshot((snapshot) =>
                setCartItems(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    } else {
        history.push('/login')
    }

    return (
        <div className="cart">
            {cartItems.length === 0 ? (
                <div className="cart__empty">
                    <h1>
                        You have no items in your Cart! Click the add to cart
                        button to see them here!
                    </h1>
                </div>
            ) : (
                <div className="cart__items">
                    <h1>Your Cart</h1>
                    {cartItems.map((item) => (
                        <CartItem
                            id={item.data.id}
                            title={item.data.title}
                            image={item.data.image}
                            price={item.data.price}
                            rating={item.data.rating}
                            author={item.data.author}
                        />
                    ))}
                </div>
            )}

            <div className="cart__right">
                {cartItems.length ? (
                    <>
                        <Subtotal />
                        <CheckoutButton />
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default Cart
