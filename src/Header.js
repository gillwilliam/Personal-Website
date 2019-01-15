import TypeWriter from 'react-typewriter';
import ContactInfo from './ContactInfo';
import ProfilePic from './pp.jpg';
var React = require('react');

class Header extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <div className="row vertical-align">
          <div className="col-lg-3 col-md-5 col-sm-4">
                <h2>William Gill</h2>
              <p>Computer Science Student
                <br/>
                University of Waterloo Class of 2021</p>
          </div>

          <div className="col-lg-5 col-md-7 col-sm-8">
            <div className="row">
              <ContactInfo/>
            </div>
            <div className="row center">
              <a target="_blank" href="https://drive.google.com/file/d/1khq59a9w_TtPrqQs_v8R6OjcupDjFs4i/view">
                <button id="resume" onClick={this.download} className="btn btn-primary btn-outline">Resume
                </button>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 center">
            <img className="Profile-Pic img-responsive" src={ProfilePic} alt="Card image cap"/>
          </div>

        </div>

      </div>
    )
  }
}

export default Header;
