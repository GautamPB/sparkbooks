import React, { useState } from 'react'
import BookPreview from './BookPreview'
import '../styles/CheckoutPage.css'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'
import { actionTypes } from './reducer'
import { Button } from '@material-ui/core'

const Order = () => {
    const [phone, setPhone] = useState('')

    // const [address, setAddress] = useState('')

    const [apt, setApt] = useState('')
    const [lineOne, setLineOne] = useState('')
    const [lineTwo, setLineTwo] = useState('')
    const [lineThree, setLineThree] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pin, setPin] = useState('')
    const [landmark, setLandmark] = useState('')

    const [{ cart }, dispatch] = useStateValue()

    const [{ user }] = useStateValue()

    const [, addressFunction] = useStateValue()

    const [, phoneFunction] = useStateValue()

    const history = useHistory()

    const handleSubmit = (e) => {
        const error = document.querySelector('.hidden')
        if (
            !apt ||
            !phone ||
            !lineOne ||
            !lineTwo ||
            !lineThree ||
            !city ||
            !state ||
            !pin
        ) {
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
                address:
                    '#' +
                    apt +
                    ' ' +
                    lineOne +
                    '\n' +
                    lineTwo +
                    '\n' +
                    lineThree +
                    '\n' +
                    city +
                    '\n' +
                    state +
                    '\n' +
                    pin +
                    '\nNear ' +
                    landmark,
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
                <h2>Name: {user ? user.displayName : history.push('/')}</h2>
                <h2>Email : {user ? user.email : history.push('/')}</h2>
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
                    {/* <h2>Address: </h2>
                    <textarea
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="address__input"
                        rows={5}
                        cols={20}
                    /> */}
                    <h2>Address</h2>
                    <div className="address__line">
                        <input
                            placeholder="Apartment no."
                            type="number"
                            value={apt}
                            onChange={(e) => setApt(e.target.value)}
                        />
                    </div>

                    <div className="address__line">
                        <input
                            placeholder="Address Line 1"
                            type="text"
                            value={lineOne}
                            onChange={(e) => setLineOne(e.target.value)}
                        />
                    </div>

                    <div className="address__line">
                        <input
                            placeholder="Address Line 2"
                            type="text"
                            value={lineTwo}
                            onChange={(e) => setLineTwo(e.target.value)}
                        />
                    </div>

                    <div className="address__line">
                        <input
                            placeholder="Address Line 3"
                            type="text"
                            value={lineThree}
                            onChange={(e) => setLineThree(e.target.value)}
                        />
                    </div>

                    <div className="address__line">
                        <input
                            placeholder="City"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div className="address__line">
                        <input
                            placeholder="State"
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>

                    <div className="address__line">
                        <input
                            placeholder="Pin Code"
                            type="number"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                        />
                    </div>

                    <div className="address__line">
                        <input
                            placeholder="Landmark(optional)"
                            type="text"
                            value={landmark}
                            onChange={(e) => setLandmark(e.target.value)}
                        />
                    </div>
                </div>
                <div className="checkoutButton__link">
                    <Button onClick={handleSubmit}>Proceed to payment</Button>
                </div>
            </div>
        </div>
    )
}

export default Order
