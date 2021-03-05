import React, { useState } from 'react'
import BookPreview from './BookPreview'
import '../styles/CheckoutPage.css'
import { useStateValue } from './StateProvider'
import { Button } from '@material-ui/core'

//add timestamp for each order document

const Order = () => {
    const [phone, setPhone] = useState()

    const [{ cart }] = useStateValue()

    const [{ user }] = useStateValue()

    return (
        <div className="checkout">
            <h1>Checkout</h1>

            <div className="checkout__items">
                {cart.map((item) => (
                    <BookPreview
                        title={item.title}
                        author={item.author}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                ))}
            </div>

            <div className="checkout__details">
                <h2>Name: {user ? user.displayName : ''}</h2>
                <h2>Email : {user ? user.email : ''}</h2>
                <div className="user__phone">
                    {user.phoneNumber ? (
                        <>
                            <h2>Phone Number : {user.phoneNumber}</h2>
                        </>
                    ) : (
                        <>
                            <h2>Phone Number</h2>
                            <input type="text" className="phone__input" />
                            <Button className="button__link">Submit</Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Order
