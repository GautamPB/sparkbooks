import React, { useState } from 'react'
import '../styles/Collection.css'
import db from '../firebase'
import BookPreview from './BookPreview'

const Collection = () => {
    const [books, setBooks] = useState([])

    db.collection('books').onSnapshot((snapshot) => {
        setBooks(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
    })

    return (
        <div className="collection">
            <h1>Our Collection</h1>
            <div className="books">
                {books.map((book) => (
                    <BookPreview
                        title={book.data.title}
                        author={book.data.author}
                        price={book.data.price}
                        rating={book.data.rating}
                        image={book.data.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Collection
