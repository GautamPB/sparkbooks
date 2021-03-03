import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BookPreview from './BookPreview'
import '../styles/Order.css'
import db from '../firebase'

//add timestamp for each order document

const Order = () => {
    const { username } = useParams()

    const [orders, setOrders] = useState([])

    useEffect(() => {
        db.collection('orders')
            .where('buyer', '==', username)
            .onSnapshot((snapshot) =>
                setOrders(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    }, [])

    return (
        <div className="order">
            <h1>{username}'s orders</h1>

            <div className="user__orders">
                {orders.map((order) => (
                    <BookPreview
                        id={order.data.id}
                        title={order.data.title}
                        author={order.data.author}
                        price={order.data.price}
                        image={order.data.image}
                        rating={order.data.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default Order
