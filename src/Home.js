import React from 'react';
import ReactDOM from 'react-dom';
import Picture from './610.png'
import SkillChips from './SkillChips'
import Music from './Music';
import IconSkills from './IconSkills';
import Header from './Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <IconSkills/>
        <br />
        <br />

        <div>

          <div className="container-fluid">
            <ExperienceGrid/>
          </div>
          <br />
          <br/>
          <Music/>
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
        title: "Team 610",
        url: "http://team610.com/",
        chipData: [
          {
            key: 0,
            label: 'Robotics'
          }, {
            key: 1,
            label: 'Java'
          }, {
            key: 2,
            label: 'C'
          }
        ]
      }, {
        img: "http://static1.squarespace.com/static/56a4fc36ab28105c1174867d/t/58d0aeb8b3db2bea2629560f/1500330563012/?format=1500w",
        title: "Katla Labs",
        url: "https://www.sidekick-app.com/",
        chipData: [
          {
            key: 0,
            label: 'Android'
          }, {
            key: 1,
            label: 'FireBase'
          }, {
            key: 2,
            label: 'Git'
          }
        ]
      }, {
        img: "http://www.viarail.ca/sites/all/files/media/images/logo/logo_viarail-large-carre.png",
        title: "Via Rail",
        url: "http://www.viarail.ca/en",
        chipData: [
          {
            key: 0,
            label: 'React'
          }, {
            key: 1,
            label: 'NodeJS'
          }, {
            key: 2,
            label: 'SQL'
          }
        ]
      }, {
        img: "http://sas.uwaterloo.ca/~wang/img/uw.png",
        title: "University of Waterloo"
      }
    ].slice(0, 3)

    return (
      <div className="container-fluid popular-list">
        {work.map((elem) => {
          return (
            <ul className='space-list-items'>
              <ExperienceElement url={elem.url} img={elem.img} chip={elem.chipData} title={elem.title}/>
            </ul>

          )
        })}
      </div>
    )
  }
}

class ExperienceElement extends React.Component {

  render() {

    var imgStyle = {
      width: "20rem"
    };

    return (
      <div className="col">
        <a href={this.props.url}>
          <h4>{this.props.title}</h4>
        </a>
        <div className="row">
          <div className="col-sm-5">
            <img className="test" src={this.props.img} alt="Card image cap"/>
          </div>
          <div className="col-sm-1">
            <SkillChips chip={this.props.chip}/>
          </div>

        </div>
        <div ></div>

      </div>
    )
  }
}

export default Home;
