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
              <i className="devicon-react-plain colored"></i>
              <figcaption>React</figcaption>
            </figure>
            <figure>
              <i className="devicon-cplusplus-plain colored"></i>
              <figcaption>C++</figcaption>
            </figure>
            <figure>
              <i className="devicon-django-plain colored"></i>
              <figcaption>Django</figcaption>
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
              <i className="devicon-python-plain colored"></i>
              <figcaption>Python</figcaption>
            </figure>
            <figure>
              <i className="devicon-android-plain colored"></i>
              <figcaption>Android</figcaption>
            </figure>

          </article>

        </div>
      </div>
    )
  }
}

module.exports = IconSkills;
