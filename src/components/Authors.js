import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Authors.css'

const Authors = () => {
    const { author } = useParams()

    return (
        <div className="authors">
            <h1>{author}</h1>
        </div>
    )
}

export default Authors
