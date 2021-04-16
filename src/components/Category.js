import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Category.css'
import BookPreview from './BookPreview'
import db from '../firebase'

const Authors = () => {
    const { category } = useParams()

    const [books, setBooks] = useState([])

    db.collection('books')
        .where('category', '==', category)
        .onSnapshot((snapshot) =>
            setBooks(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )

    return (
        <div className="authors">
            <h1>Category : {category.toUpperCase()}</h1>

            <div className="books">
                {books.map((book) => (
                    <BookPreview
                        id={book.data.id}
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

export default Authors
