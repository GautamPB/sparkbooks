import React from 'react'
import { Button } from '@material-ui/core'
import HomeBook from './HomeBook'
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

                <HomeBook />
                <HomeBook />
                <HomeBook />
                <HomeBook />
            </div>
        </div>
    )
}

export default Home
