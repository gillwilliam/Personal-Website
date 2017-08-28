import Home from './Home';
import Music from './Music';
import TopElement from './TopElement';
import Footer from './Footer'

var React = require('react');
var ReactRouter = require('react-router-dom');
var ModalTest = require('./ModalTest')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
const Graph = require('./Graphs');
var OtherPage = require('./OtherPage');

const logo = require('./logo.svg');
const css = require('./App.css');
const injectTapEventPlugin = require('react-tap-event-plugin');

var ReactGA = require('react-ga');
ReactGA.initialize('UA-104876064-1');

function logPageView() {
  console.log(window.location.pathname + window.location.search);
  ReactGA.set({
    page: window.location.pathname + window.location.search
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
}
class App extends React.Component {

  constructor(props) {
    super(props);
    injectTapEventPlugin();
    logPageView()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/modal' component={ModalTest}/>
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
