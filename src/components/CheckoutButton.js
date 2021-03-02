import React from 'react'
import '../styles/CheckoutButton.css'
import { Button } from '@material-ui/core'

const CheckoutButton = () => {
    const handleCheckout = () => {
        console.log('add these items to orders collection.')
    }

    return (
        <div className="checkoutButton">
            <Button onClick={handleCheckout}>Proceed to checkout</Button>
        </div>
    )
}

export default CheckoutButton
