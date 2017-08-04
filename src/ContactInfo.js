var React = require('react');

class ContactInfo extends React.Component {
  render() {
    return (
      <div className="container my-contact">
      <article>
        <figure>
          <a href="http://www.github.com/gillwilliam">
          <i className="devicon-github-plain colored"></i>
          </a>
          <figcaption style={{color: "#111"}}>Github</figcaption>
        </figure>
        <figure>
          <a href="https://www.linkedin.com/in/william-gill-b23a35142/">
          <i className="devicon-linkedin-plain colored"></i>
          </a>
          <figcaption style={{color: "#111"}}>LinkedIn</figcaption>
        </figure>
        <figure>
          <a href="mailto:gill.william@gmail.com">
          <i className="devicon-google-plain colored"></i>
          </a>
          <figcaption style={{color: "#111"}}>Gmail</figcaption>
        </figure>

      </article>
      </div>
    )
  }
}

export default ContactInfo;
