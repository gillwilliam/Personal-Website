import Home from './Home';
import Music from './Music';
import TopElement from './TopElement';
import Footer from './Footer'

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
        <Home />
      <Footer />
      </div>
    );
  }
}

export default App;
