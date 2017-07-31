import React from 'react';
import ReactDOM from 'react-dom';
import Picture from './610.png'
import ChipExampleArray from './ExampleChip'
import Music from './Music'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2>William Gill</h2>
          <p>Computer Science Student
            <br/>
            University of Waterloo Class of 2021</p>
        </div>

        <div>

          <ExperienceGrid/>
          <Music />
        </div>

      </div>
    )
  }
}

class ExperienceGrid extends React.Component {

  render() {
    var work = [
      {
        img: "http://www.team610.com/wp-content/uploads/2013/11/cropped-Untitled-151-150x150.png",
        title: "Team 610"
      }, {
        img: "http://static1.squarespace.com/static/56a4fc36ab28105c1174867d/t/58d0aeb8b3db2bea2629560f/1500330563012/?format=1500w",
        title: "Katla Labs"
      }, {
        img: "http://www.viarail.ca/sites/all/files/media/images/logo/logo_viarail-large-carre.png",
        title: "Via Rail"
      },
      {
        img: "http://sas.uwaterloo.ca/~wang/img/uw.png",
        title: "University of Waterloo"
      }
    ]

    return (
      <div className="container-fluid popular-list">
        {work.map((elem) => {
          return (
            <ul className='space-list-items'>
              <OtherPage img={elem.img} title={elem.title}/>
            </ul>

          )
        })}
      </div>
    )
  }
}

class OtherPage extends React.Component {

  render() {

    var imgStyle = {
      width: "20rem"
    };

    return (
      <div className="col">
      <h4 style={imgStyle}>{this.props.title}</h4>
        <div className="row alert alert-info">
          <div className="col-sm-5">
            <img className="test" src={this.props.img} alt="Card image cap"/>
          </div>
          <div className="col-sm-1">
            <ChipExampleArray/>
          </div>
        </div>
        <div >
        </div>

      </div>
    )
  }
}

export default Home;
