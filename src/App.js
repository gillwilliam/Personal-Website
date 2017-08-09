import Home from './Home';
import Music from './Music';
import TopElement from './TopElement';

var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
const Graph = require('./Graphs');
var OtherPage = require('./OtherPage');


const logo = require('./logo.svg');
const css = require('./App.css');
const injectTapEventPlugin = require('react-tap-event-plugin');

class App extends React.Component {

  constructor(props){
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <div className="App">
        <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/graphs' component={Graph} />
            <Route exact path='/music' component={Music} />
            <Route render={function () {
              return <Home />
            }} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
