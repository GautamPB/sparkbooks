import './App.css'
import Header from './components/Header'
import HomePage from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Authors from './components/Authors'
import Collection from './components/Collection'
import SingleBook from './components/SingleBook'
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Header />
                        <Login />
                    </Route>

                    <Route path="/about">
                        <Header />
                        <About />
                    </Route>

                    <Route path="/authors">
                        <Header />
                        <Authors />
                    </Route>

                    <Route path="/collection">
                        <Header />
                        <Collection />
                    </Route>

                    <Route path="/book/:data">
                        <Header />
                        <SingleBook />
                    </Route>

                    <Route path="/profile/:username">
                        <Header />
                        <Profile />
                    </Route>

                    <Route path="/">
                        <Header />
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
