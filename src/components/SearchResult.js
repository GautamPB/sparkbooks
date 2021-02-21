import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/SearchResult.css'
import db from '../firebase'

const SearchResult = () => {
    const { searchValue } = useParams()

    const [books, setBooks] = useState([])

    useEffect(() => {
        db.collection('books').onSnapshot((snapshot) =>
            setBooks(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])

    return (
        <div className="searchResult">
            <h1>Search results for {searchValue}</h1>
        </div>
    )
}

export default SearchResult
