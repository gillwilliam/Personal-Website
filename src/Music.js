import Paper from 'material-ui/Paper';
import TypeWriter from 'react-typewriter';
import TopElement from './TopElement';
import HtmlTag from './HtmlTag';
import Responsive from 'react-responsive';

var React = require('react');
const Api = require('./Api');
var MediaQuery = require('react-responsive');

const ExtraLarge = ({ children }) => <Responsive minWidth={1566} children={children} />;
const ExtraLarge1 = ({ children }) => <Responsive minWidth={1378} maxWidth={1565} children={children} />;
const ExtraLarge2 = ({ children }) => <Responsive minWidth={1200} maxWidth={1378} children={children} />;
const Large = ({ children }) => <Responsive minWidth={992} maxWidth={1200} children={children} />;
const Medium = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
const Small = ({ children }) => <Responsive minWidth={576} maxWidth={768} children={children} />;
const ExtraSmall = ({ children }) => <Responsive maxWidth={576} children={children} />;

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
          artists: data
        }
      })
    })

    Api.getAlbums().then((data) => {
      this.setState(() => {
        return {
          albums: data
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
          <ExtraLarge>
              <GridCreator artists={this.state.artists.slice(0,8)} albums={this.state.albums.slice(0,8)} xl={true}/>
          </ExtraLarge>

          <ExtraLarge1>
              <GridCreator artists={this.state.artists.slice(0,7)} albums={this.state.albums.slice(0,7)} xl={true}/>
          </ExtraLarge1>

          <ExtraLarge2>
              <GridCreator artists={this.state.artists.slice(0,6)} albums={this.state.albums.slice(0,6)} xl={true}/>
          </ExtraLarge2>

          <Large>
              <GridCreator artists={this.state.artists.slice(0,9)} albums={this.state.albums.slice(0,9)}/>
          </Large>

          <Medium>
              <GridCreator artists={this.state.artists.slice(0,9)} albums={this.state.albums.slice(0,9)}/>
          </Medium>

          <Small>
              <GridCreator artists={this.state.artists.slice(0,6)} albums={this.state.albums.slice(0,6)}/>
          </Small>

          <ExtraSmall>
              <GridCreator artists={this.state.artists.slice(0,6)} albums={this.state.albums.slice(0,6)}/>
          </ExtraSmall>


          <br/>


        </div>
      </div>
    )
  }
}

function GridCreator(props) {
  return (
    <div>
    <div className={props.xl ? "popular-list" : "row"}>
      {props.artists.map((artist) => {
        return (<MusicGrid key={artist.name} img={artist.image[3]["#text"]} artistName={artist.name.substring(0, 19)} playCount={artist.playcount} url={artist.url} artist={true} xl={props.xl}/>)
      })}
    </div>

      <div className={props.xl ? "popular-list" : "row"}>
        {props.albums.map((albums) => {
          return (<MusicGrid img={albums.image[3]["#text"]} artistName={albums.name.substring(0, 19)} playCount={albums.playcount} url={albums.url} artist={false} xl={props.xl}/>)
        })}
      </div>
    </div>
  )
}

class MusicGrid extends React.Component {

  render() {
    return (
      <ul className={this.props.xl ? "space-list-items" : 'col-lg-2 col-md-4 col-sm-4 col-xs-6'}>
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
        }}>{this.props.playCount}
          plays</li>
      </ul>
    )
  }
}

export default Music
