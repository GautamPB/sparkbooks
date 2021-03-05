import React from 'react'
import '../styles/CheckoutButton.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const CheckoutButton = () => {
    return (
        <div className="checkoutButton">
            <Link to="/checkout" className="checkoutButton__link">
                <Button>Proceed to checkout</Button>
            </Link>
        </div>
    )
}

export default CheckoutButton
