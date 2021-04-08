import React from 'react'
import '../styles/Subtotal.css'
import { Button } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal, actionTypes } from './reducer'
import { useHistory } from 'react-router-dom'
import db from '../firebase'

const Subtotal = () => {
    const history = useHistory()

    const [{ user }] = useStateValue()
    const [{ cart }, dispatch] = useStateValue()
    const [{ userPhone }] = useStateValue()
    const [{ userAddress }] = useStateValue()

    const placeOrder = () => {
        console.log('Place order')
        for (let i = 0; i < cart.length; i++) {
            db.collection('orders').add({
                buyer: user.displayName,
                title: cart[i].title,
                author: cart[i].author,
                rating: cart[i].rating,
                price: cart[i].price,
                image: cart[i].image,
                phone: userPhone,
                address: userAddress,
                email: user.email,
            })
        }

        dispatch({
            type: actionTypes.EMPTY_CART,
        })

        history.push('/orders/' + user.displayName)
    }

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
                <Button onClick={placeOrder}>Place Order</Button>
            </div>
        </div>
    )
}

export default Subtotal
