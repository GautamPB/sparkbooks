import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Liked.css'

const Liked = () => {
    const { user } = useParams()

    return (
        <div className="liked">
            <h1>Liked books Page!</h1>
        </div>
    )
}

export default Liked
