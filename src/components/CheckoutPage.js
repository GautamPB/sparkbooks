import React, { useState } from 'react'
import BookPreview from './BookPreview'
import '../styles/CheckoutPage.css'
import { useStateValue } from './StateProvider'
import { Button } from '@material-ui/core'
import db from '../firebase'
import { useHistory } from 'react-router-dom'
import { actionTypes } from './reducer'

const Order = () => {
    const [phone, setPhone] = useState('')

    const [address, setAddress] = useState('')

    const [{ cart }, dispatch] = useStateValue()

    const [{ user }] = useStateValue()

    const history = useHistory()

    let grandTotal = 0

    const handleSubmit = () => {
        const error = document.querySelector('.hidden')
        if (!phone || !address) {
            error.classList.remove('hidden')
        } else {
            for (let i = 0; i < cart.length; i++) {
                grandTotal += cart[i].price
                db.collection('orders').add({
                    buyer: user.displayName,
                    title: cart[i].title,
                    author: cart[i].author,
                    rating: cart[i].rating,
                    price: cart[i].price,
                    image: cart[i].image,
                    phone: phone,
                    address: address,
                    email: user.email,
                })
            }

            dispatch({
                type: actionTypes.EMPTY_CART,
            })

            history.push('/orders/' + user.displayName)
        }
    }

    return (
        <div className="checkout">
            <h1>Checkout</h1>

            <h1 className="hidden error">
                Please fill out the form correctly!
            </h1>

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
                            <h2>Phone Number: </h2>
                            <input
                                className="phone__input"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="number"
                            />
                        </>
                    )}
                </div>

                <div className="user__address">
                    <h2>Address: </h2>
                    <textarea
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="address__input"
                        rows={5}
                        cols={20}
                    />
                </div>
                <div className="checkoutButton__link">
                    <Button onClick={handleSubmit}>Place Order</Button>
                </div>
            </div>
        </div>
    )
}

export default Order
