var React = require('react');

class IconSkills extends React.Component {
  render() {
    return (
      <div id="skills" className="my-skills">
	<br /><br /><div className="container">
		<center>
      <h2>Experience</h2>
    </center><br />

        <article>
            <figure>
                  <i className="devicon-android-plain colored"></i>
                  <figcaption>Android</figcaption>
            </figure><figure>
                  <i className="devicon-java-plain colored"></i>
                  <figcaption>Java</figcaption>
            </figure><figure>
                  <i className="devicon-cplusplus-plain colored"></i>
                  <figcaption>C++</figcaption>
            </figure><figure>
            <i className="devicon-mysql-plain colored"></i>
                  <figcaption>MySQL</figcaption>
            </figure><figure>
                  <i className="devicon-git-plain colored"></i>
                  <figcaption>Git</figcaption>
            </figure><figure>
                <i className="devicon-html5-plain colored"></i>
                <figcaption>HTML</figcaption>
           </figure><figure>
                <i className="devicon-javascript-plain colored"></i>
                <figcaption>JavaScript</figcaption>
          </figure><figure>
                <i className="devicon-bootstrap-plain colored"></i>
                <figcaption>Bootstrap</figcaption>
          </figure>

      </article>
	<br /><br />
</div>
</div>
    )
  }
}

module.exports = IconSkills;
