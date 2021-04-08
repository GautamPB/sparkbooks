import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Payment.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import qrcode from '../pictures/payment_code.jpg'

const Payment = () => {
    const history = useHistory()

    const [{ user }] = useStateValue()

    const [{ cart }] = useStateValue()

    const [{ userAddress }] = useStateValue()

    const [{ userPhone }] = useStateValue()

    return (
        <div className="payment">
            <h1 className="payment__header">Payment</h1>

            <div className="payment__body">
                <div className="payment__left">
                    <div className="payment__items">
                        <h1 className="payment__items">
                            Total: {cart.length} item(s):
                        </h1>

                        {cart.map((item) => (
                            <div className="payment__item">
                                <img src={item.image} alt="" />
                                <h2>
                                    {item.title} by <small>{item.author}</small>
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="payment__right">
                    <h1>
                        Deliver to:{' '}
                        {user ? user.displayName : history.push('/')}
                    </h1>

                    <h1>Email: {user ? user.email : history.push('/')}</h1>

                    <div className="payment__address">
                        <h1>Address</h1>
                        <textarea
                            readOnly
                            placeholder={userAddress}
                            rows={10}
                            columns={30}
                        />
                    </div>
                    <div className="payment__phone">
                        <h1>Phone Number:</h1>
                        <h2>{userPhone}</h2>
                    </div>
                </div>
            </div>

            <div className="payment__modes">
                <input
                    type="radio"
                    id="payment_method"
                    name="payment"
                    value="Cash"
                />
                <label for="cash">Cash</label>

                <br />
                <br />

                <input
                    type="radio"
                    id="payment_method"
                    name="payment"
                    value="UPI"
                />
                <label for="upi">UPI</label>
            </div>

            <div className="payment__subtotal">
                <Subtotal />
            </div>

            <div className="payment__code">
                <img src={qrcode} alt="" />
                <h4>Scan my QR code to pay</h4>

                <h4>Paying: Gautam</h4>
                <h4>sparkbooks735@gmail.com</h4>

                <div className="payment__partners">
                    <img
                        src="https://i.pinimg.com/originals/d6/c0/2b/d6c02b967bd74dfcbb171cb84dade3f3.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Payment
