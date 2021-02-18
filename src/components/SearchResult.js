import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/SearchResult.css'

const SearchResult = () => {
    const { searchValue } = useParams()

    return (
        <div className="searchResult">
            <h1>{searchValue}</h1>
        </div>
    )
}

export default SearchResult
