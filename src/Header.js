import TypeWriter from 'react-typewriter';
import ContactInfo from './ContactInfo';
var React = require('react');

class Header extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-sm-4">
            <TypeWriter initDelay={2000} minDelay={80} typing={1}>
              <h2>William Gill</h2>
            </TypeWriter>
            <p>Computer Science Student
              <br/>
              University of Waterloo Class of 2021</p>
          </div>
          <div className="col-sm-5 pull-right">
            <div className="row">
              <ContactInfo/>
            </div>
            <div className="row center">
              <a target="_blank" href="https://drive.google.com/file/d/0ByuSLmVuUKs8QkdvOTdKZDFySG8/view">
                <button id="resume" onClick={this.download} className="btn btn-primary btn-outline">Resume
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Header;