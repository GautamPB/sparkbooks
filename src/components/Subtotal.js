import React from 'react'
import '../styles/Subtotal.css'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
    const [{ cart }] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart?.length} items) :{' '}
                            <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType="text"
                thousandSeparator={true}
                prefix={'₹'}
            />
        </div>
    )
}

export default Subtotal
