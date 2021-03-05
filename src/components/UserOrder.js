import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import BookPreview from './BookPreview'
import { Button } from '@material-ui/core'
import db from '../firebase'
import { useParams } from 'react-router-dom'
import '../styles/UserOrder.css'

const UserOrder = () => {
    const { username } = useParams()

    const [{ user }] = useStateValue()

    const [orders, setOrders] = useState([])

    db.collection('orders')
        .where('buyer', '==', user.displayName)
        .onSnapshot((snapshot) =>
            setOrders(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )

    return (
        <div className="userOrder">
            <div className="orders">
                {!orders.length ? (
                    <>
                        <h1>You have no pending orders!</h1>
                        <Link to="/collection" className="button__link">
                            <Button>Continue Shopping</Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <h1>{username}'s Orders</h1>
                        {orders.map((order) => (
                            <BookPreview
                                id={order.data.id}
                                title={order.data.title}
                                author={order.data.author}
                                rating={order.data.rating}
                                price={order.data.price}
                                image={order.data.image}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default UserOrder
