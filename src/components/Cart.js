import React from 'react'
import '../styles/Cart.css'
import CartItem from './CartItem'
import { useStateValue } from './StateProvider'
import CheckoutButton from './CheckoutButton'

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
                    {cart.map((item) => (
                        <CartItem
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            author={item.author}
                        />
                    ))}
                </div>
            )}

            <div className="cart__right">
                {cart?.length ? (
                    <>
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
