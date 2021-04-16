import './App.css'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import HomePage from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Category from './components/Category'
import Author from './components/Authors'
import Collection from './components/Collection'
import SingleBook from './components/SingleBook'
import Profile from './components/Profile'
import Cart from './components/Cart'
import SearchResult from './components/SearchResult'
import CheckoutPage from './components/CheckoutPage'
import UserOrders from './components/UserOrder'
import Payment from './components/Payment'
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

                    <Route path="/category/:category">
                        <Header />
                        <Category />
                    </Route>

                    <Route path="/authors/:author">
                        <Header />
                        <Author />
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

                    <Route path="/cart">
                        <Header />
                        <Cart />
                    </Route>

                    <Route path="/search/:searchValue">
                        <Header />
                        <SearchResult />
                    </Route>

                    <Route path="/checkout">
                        <Header />
                        <CheckoutPage />
                    </Route>

                    <Route path="/orders/:username">
                        <Header />
                        <UserOrders />
                    </Route>

                    <Route path="/payment">
                        <Header />
                        <Payment />
                    </Route>

                    <Route path="/home">
                        <Header />
                        <HomePage />
                    </Route>

                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
