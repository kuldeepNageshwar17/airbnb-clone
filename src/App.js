import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import SearchPage from "./SearchPage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/Search' component={SearchPage}></Route>
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
