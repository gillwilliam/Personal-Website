import React from 'react';
import ReactDOM from 'react-dom';
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
        <div className="container-fluid">
          <Header/>

          <IconSkills/>
          <br/>
          <br/>
          <div className="container-fluid my-experience">
            <ExperienceGrid list={work} title={"Work Experience"}/>
          </div>
          <div className="container-fluid my-experience" style={{ background: "#21a8dc"}}>
            <ExperienceGrid list={projects} title={"Projects & Research"}/>
          </div>
      </div>
        <br/>
        <Music/>

      </div>
    )
  }
}

class ExperienceGrid extends React.Component {
  render() {
    return (
      <div className={"container"}>
        <div className="center">
          <h2 style={{
            color: "#ffffff"
          }}>{this.props.title}</h2>
        </div>
        {this.props.list.map((elem, index) => {
          console.log(elem);
          return (
            <div>
              <div>
                <ExperienceElement
                  url={elem.url}
                  img={elem.img}
                  chip={elem.chipData}
                  title={elem.title}
                  description={elem.description || ["TESTING"]}
                  date={elem.date || ""}
                  role={elem.role || ""}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

class ExperienceElement extends React.Component {

  render() {

    console.log(this.props.description);

    var imgStyle = {
      width: "20rem"
    };

    return (
      <div className="row">
        <div className="row">
          <a className="col-sm-4" style={{
            color: "#ffffff"
          }} href={this.props.url}>
          <h4>{this.props.title}</h4>
          <h4>{this.props.role}</h4>
          </a>
          <div className="col-sm-6">
            <SkillChips chip={this.props.chip}/>
          </div>
          <h4 className="col-sm-2">{this.props.date}</h4>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img src={this.props.img} alt="Card image cap"/>
          </div>
          <ul className="col-sm-7">
            {this.props.description.map(desc => <li>{desc}</li>)}
          </ul>
        </div>
        <hr />
      </div>
    )
  }
}

export default Home;
