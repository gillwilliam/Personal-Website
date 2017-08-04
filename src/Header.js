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
          <div className="col-sm-7">
          <ContactInfo />
          </div>
          </div>

      </div>
    )
  }
}

export default Header;
