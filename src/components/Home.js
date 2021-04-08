import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import BookPreview from './BookPreview'
import SearchIcon from '@material-ui/icons/Search'
import HomeButton from './HomeButton'
import { Link } from 'react-router-dom'
import db from '../firebase'
import '../styles/Home.css'

const Home = () => {
    const [search, setSearch] = useState()

    const [books, setBooks] = useState([])

    useEffect(() => {
        db.collection('books')
            .limit(5)
            .onSnapshot((snapshot) =>
                setBooks(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    }, [])

    return (
        <div className="home">
            <div className="home__search">
                <SearchIcon />
                <form>
                    <input
                        className="search__input"
                        placeholder="Search for books, authors or categories"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Link to={'/search/' + search} className="home__link">
                        <Button type="submit">Search</Button>
                    </Link>
                </form>
            </div>

            <div className="home__button">
                <div className="home__buttonColumn">
                    <HomeButton author="Agatha Christie" />

                    <HomeButton author="Ken Follet" />

                    <HomeButton author="Jeffery Archer" />
                </div>

                <div className="home__buttonColumn" to="/authors/enid blyton">
                    <HomeButton author="Enid Blyton" />

                    <HomeButton author="Dan Brown" />

                    <HomeButton author="Woodhouse" />
                </div>
            </div>

            <div className="home__content">
                <h1>Some Popular Books</h1>

                {books.map((book) => (
                    <BookPreview
                        id={book.data.id}
                        title={book.data.title}
                        image={book.data.image}
                        author={book.data.author}
                        price={book.data.price}
                        rating={book.data.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
