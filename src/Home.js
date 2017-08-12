import React from 'react';
import ReactDOM from 'react-dom';
import Picture from './610.png'
import SkillChips from './SkillChips'
import Music from './Music';
import IconSkills from './IconSkills';
import Header from './Header';

const work = require('./Work');
const projects = require('./Projects');

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>

        <IconSkills/>
        <br/>
        <br/>

        <div className="container-fluid my-experience">
        <ExperienceGrid list={work} title={"Work Experience"}/>
        <hr/>
        <ExperienceGrid list={projects} title={"Projects"}/>
        </div>

        <br/>
        <br/>
        <Music/>

      </div>
    )
  }
}

class ExperienceGrid extends React.Component {
  render() {


    return (
      <div className="container">
      <div className="center">
      <h2 style={{
        color: "#ffffff"
      }}>{this.props.title}</h2>
      </div>
        {this.props.list.map((elem, index) => {
          return (
            <div>
            <div className="margin-add col-md-3 experience-back">
              <ExperienceElement url={elem.url} img={elem.img} chip={elem.chipData} title={elem.title}/>
            </div>
            {(index != 2) && <div className="col-sm-1"/>}
            </div>
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
      <div className="row">
          <a style={{
            color: "gold"
          }} href={this.props.url}>
            <h4>{this.props.title}</h4>
          </a>
        <div className="row">
          <div className="col-sm-7">
            <img src={this.props.img} alt="Card image cap"/>
          </div>
          <div className="col-sm-3">
            <SkillChips chip={this.props.chip}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
