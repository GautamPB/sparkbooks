import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Authors from './components/Authors'
import Collection from './components/Collection'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
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

                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
