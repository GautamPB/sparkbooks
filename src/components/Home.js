import React from 'react'
import { Button } from '@material-ui/core'
import BookPreview from './BookPreview'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home__button">
                <div className="home__buttonColumn">
                    <Button>Agatha Christie</Button>
                    <Button>Ken Follet</Button>
                    <Button>Jeffery Archer</Button>
                </div>

                <div className="home__buttonColumn">
                    <Button>Enid Blyton</Button>
                    <Button>Dan Brown</Button>
                    <Button>Woodhouse</Button>
                </div>
            </div>

            <div className="home__content">
                <h1>Some Popular Books</h1>

                <BookPreview
                    title="Book Title 1"
                    image="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
                    author="Agatha Christie"
                    rating={5}
                    price={800}
                />

                <BookPreview
                    title="Book Title 2"
                    image="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
                    author="JK Rowling"
                    rating={4}
                    price={600}
                />

                <BookPreview
                    title="Book Title 3"
                    image="https://www.wendymogel.com/images/uploads/books/Cover-coming-soon_orange-with-yellow.jpg"
                    author="Jeffery Archer"
                    rating={3}
                    price={900}
                />
            </div>
        </div>
    )
}

export default Home
