import React from 'react'
import '../styles/Subtotal.css'
import { Button } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'

const Subtotal = () => {
    const [{ cart }] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div className="subtotal__text">
                        <h4>Total Price : </h4>
                        <h4>{value}</h4>
                    </div>
                )}
                decimalState={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />

            <div className="subtotal__button">
                <Button>Pay</Button>
            </div>
        </div>
    )
}

export default Subtotal
