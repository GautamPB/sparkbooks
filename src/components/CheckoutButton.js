import React from 'react'
import '../styles/CheckoutButton.css'
import { Button } from '@material-ui/core'
import db from '../firebase'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

const CheckoutButton = () => {
    const [{ cart }] = useStateValue()
    const [{ user }] = useStateValue()

    const handleCheckout = () => {
        for (let i = 0; i < cart.length; ++i) {
            db.collection('orders').add({
                title: cart[i].title,
                price: cart[i].price,
                image: cart[i].image,
                buyer: cart[i].buyer,
                author: cart[i].author,
                rating: cart[i].rating,
            })
        }
    }

    return (
        <div className="checkoutButton">
            <Link
                to={'/orders/' + user.displayName}
                className="checkoutButton__link"
            >
                <Button onClick={handleCheckout} className="btn">
                    Proceed to checkout
                </Button>
            </Link>
        </div>
    )
}

export default CheckoutButton
