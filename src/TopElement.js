import './TextAnimation.css';
var React = require('react');

class TopElement extends React.Component {

  render() {
    return (
      <div>
        <svg viewBox="0 0 600 300">

          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              {this.props.word}
            </text>
          </symbol>

          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>

        </svg>
        </div>
    )
  }
}

export default TopElement;
