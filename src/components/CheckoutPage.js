import React, { useState } from 'react'
import BookPreview from './BookPreview'
import '../styles/CheckoutPage.css'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'
import { actionTypes } from './reducer'
import { Button } from '@material-ui/core'

const Order = () => {
    const [phone, setPhone] = useState('')

    const [address, setAddress] = useState('')

    const [{ cart }, dispatch] = useStateValue()

    const [{ user }] = useStateValue()

    const [, addressFunction] = useStateValue()

    const [, phoneFunction] = useStateValue()

    const history = useHistory()

    const handleSubmit = (e) => {
        const error = document.querySelector('.hidden')
        if (!phone || !address) {
            error.classList.remove('hidden')
        } else {
            // for (let i = 0; i < cart.length; i++) {
            //     db.collection('orders').add({
            //         buyer: user.displayName,
            //         title: cart[i].title,
            //         author: cart[i].author,
            //         rating: cart[i].rating,
            //         price: cart[i].price,
            //         image: cart[i].image,
            //         phone: phone,
            //         address: address,
            //         email: user.email,
            //          add payment route too.
            //     })
            // }

            // dispatch({
            //     type: actionTypes.EMPTY_CART,
            // })
            addressFunction({
                type: actionTypes.SET_ADDRESS,
                address: address,
            })

            phoneFunction({
                type: actionTypes.SET_PHONE,
                phone: phone,
            })
            history.push('/payment')
        }
    }

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

            <h1 className="hidden error">
                Please fill out the form correctly!
            </h1>

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
                    <Button onClick={handleSubmit}>Proceed to payment</Button>
                </div>
            </div>
        </div>
    )
}

export default Order
