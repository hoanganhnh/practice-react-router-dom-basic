import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import Header from '../Header'
import Home from '../Home'
import About from '../About'
import Work from '../Work'
import Services from '../Services'
import Contact from '../Contact'
import NotFound from '../NotFound'
// import styles from './App.module.scss';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about'  component={About} />
                    <Route path='/work'  component={Work} />
                    <Route path='/services'  component={Services} />
                    <Route path='/contact'  component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    )
}

export default App