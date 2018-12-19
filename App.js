import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class Repository extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { repo: {} }
    }
  
    componentDidMount() {
    }
    render() {
  
      return (<div>
        <h2>Repository</h2>
        <p>This control should show details for a SINGLE selected repository</p>
      </div>
      )
    }
  }

class Repositories extends React.Component {

  constructor(props) {
    super(props);
    this.state = { repos: [] }
  }

  componentWillMount() {
    //This could where you would fetch data
  }

  render() {
    const match = this.props.match;
    
    return (
      <div>
        <h2>Repositories</h2>
        <p>Complete this example to fecth the git-repositories (via link provided in the exercise),
          and populate the ul below with the name for each repository.
        </p>
        <ul>
        </ul>
      </div>
    )
  }
}

const App = () => (
  <Router>
    <div>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/repositories">Reposistories</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Add the missing routes here */}
      </Switch>
    </div>
  </Router>
)
export default App
