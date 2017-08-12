import Paper from 'material-ui/Paper';
import TypeWriter from 'react-typewriter';
import TopElement from './TopElement';
import HtmlTag from './HtmlTag';

var React = require('react');
const Api = require('./Api');

class Music extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      albums: []
    };
  }

  componentDidMount() {
    Api.getArtists().then((data) => {
      this.setState(() => {
        return {
          artists: data.slice(0, 8)
        }
      })
    })

    Api.getAlbums().then((data) => {
      this.setState(() => {
        return {
          albums: data.slice(0, 8)
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div className="center">
          <br/>

            <img src="https://image.flaticon.com/icons/svg/149/149125.svg" style={{
              height: "150",
              width: 150
            }}/>



          <hr/>

          <div className="popular-list">
            {this.state.artists.map((artist) => {
              return (<MusicGrid img={artist.image[3]["#text"]} artistName={artist.name.substring(0,19)} playCount={artist.playcount} url={artist.url} artist={true}/>)
            })}
          </div>

          <br/>
          <div className="popular-list">
            {this.state.albums.map((albums) => {
              return (<MusicGrid img={albums.image[3]["#text"]} artistName={albums.name.substring(0,19)} playCount={albums.playcount} url={albums.url} artist={false}/>)
            })}
          </div>

        </div>
      </div>
    )
  }
}

class MusicGrid extends React.Component {

  render() {
    return (
      <ul className='space-list-items'>
        <li>
          <img className={this.props.artist
            ? 'Artist-Pic'
            : 'Album-Pic'} src={this.props.img} alt={'Avatar for ' + this.props.artistName}/>
        </li>
        <li>
          <a href={this.props.url}>{this.props.artistName}</a>
        </li>
        <li style={{
          fontWeight: "bold"
        }}>{this.props.playCount} plays</li>
      </ul>
    )
  }
}

export default Music
