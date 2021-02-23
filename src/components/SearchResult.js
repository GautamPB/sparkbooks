import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/SearchResult.css'
import db from '../firebase'
import BookPreview from './BookPreview'

const SearchResult = () => {
    const { searchValue } = useParams()

    const [searchBooks, setSearchBooks] = useState([])

    useEffect(() => {
        db.collection('books').onSnapshot((snapshot) =>
            setSearchBooks(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])

    return (
        <div className="searchResult">
            <h1>Search results for "{searchValue}":</h1>

            {searchBooks.map((book) => (
                <div className="books">
                    {(book.data.title.toLowerCase() ==
                        searchValue.toLowerCase() ||
                        book.data.author.toLowerCase() ==
                            searchValue.toLowerCase()) && (
                        <BookPreview
                            id={book.data.id}
                            title={book.data.title}
                            author={book.data.author}
                            rating={book.data.rating}
                            price={book.data.price}
                            image={book.data.image}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default SearchResult
