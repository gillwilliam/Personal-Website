var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var OtherPage = require('./OtherPage');
const Music = require('./Music');
const logo = require('./logo.svg');
const css = require('./App.css');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div className='container-fluid'>
          <Nav />

          <Switch>
            <Route exact path='/otherPage' component={OtherPage} />
            <Route exact path='/music' component={Music} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
