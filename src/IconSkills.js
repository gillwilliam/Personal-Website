var React = require('react');

class IconSkills extends React.Component {
  render() {
    return (
      <div id="skills" className="my-skills">
        <div className="container">
          <center>
            <h2 style={{
              color: "#ffffff"
            }}>Skills</h2>
          </center><br/>

          <article>
            <figure>
              <i className="devicon-android-plain colored"></i>
              <figcaption>Android</figcaption>
            </figure>
            <figure>
              <i className="devicon-c-plain colored"></i>
              <figcaption>C</figcaption>
            </figure>
            <figure>
              <i className="devicon-java-plain colored"></i>
              <figcaption>Java</figcaption>
            </figure>
            <figure>
              <i className="devicon-nodejs-plain colored"></i>
              <figcaption>NodeJS</figcaption>
            </figure>
            <figure>
              <i className="devicon-mysql-plain colored"></i>
              <figcaption>MySQL</figcaption>
            </figure>

            <figure>
              <i className="devicon-react-plain colored"></i>
              <figcaption>React</figcaption>
            </figure>
            <figure>
              <i className="devicon-javascript-plain colored"></i>
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <i className="devicon-bootstrap-plain colored"></i>
              <figcaption>Bootstrap</figcaption>
            </figure>

          </article>

        </div>
      </div>
    )
  }
}

module.exports = IconSkills;
