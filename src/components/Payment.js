import React from 'react'
import '../styles/Payment.css'
import { useStateValue } from './StateProvider'

const Payment = () => {
    const [{ user }] = useStateValue()

    const [{ cart }] = useStateValue()

    const [{ userAddress }] = useStateValue()

    const [{ userPhone }] = useStateValue()

    return (
        <div className="payment">
            <h1 className="payment__header">Payment Page</h1>

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
                    <h1>Deliver to: {user.displayName}</h1>

                    <h1>Email: {user.email}</h1>

                    <div className="payment__address">
                        <h1>Address</h1>
                        <textarea
                            readOnly
                            placeholder={userAddress}
                            rows={6}
                            columns={30}
                        />
                    </div>
                    <div className="payment__phone">
                        <h1>Phone Number:</h1>
                        <h2>{userPhone}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
