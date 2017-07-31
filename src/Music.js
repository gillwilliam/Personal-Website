import Paper from 'material-ui/Paper';

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
          artists: data.slice(0, 6)
        }
      })
    })

    Api.getAlbums().then((data) => {
      this.setState(() => {
        return {
          albums: data.slice(0, 6)
        }
      })
    })
  }

  render() {
    var work = [
      {
        img: "http://team610.com/wp-content/uploads/2016/02/Team610SponsorshipPackagePage3_Coverpage-.png",
        title: "Team 610"
      }, {
        img: "http://static1.squarespace.com/static/56a4fc36ab28105c1174867d/t/58d0aeb8b3db2bea2629560f/1500330563012/?format=1500w",
        title: "Katla Labs"
      }, {
        img: "https://upload.wikimedia.org/wikipedia/commons/2/23/VIA_Rail_Canada_simplified.svg",
        title: "Via Rail"
      }
    ]
    return (
      <div className="center">
        <h1>On Heavy Rotation</h1>
        <h2>Artists</h2>
        <div className="container popular-list">
          {this.state.artists.map((artist) => {
            return (<ArtistGrid img={artist.image[3]["#text"]} artistName={artist.name} playCount={artist.playcount} url={artist.url}/>)
          })}
        </div>
        <h2>Albums</h2>
        <div className="container popular-list">
          {this.state.albums.map((albums) => {
            return (<ArtistGrid img={albums.image[3]["#text"]} artistName={albums.name} playCount={albums.playcount} url={albums.url}/>)
          })}
        </div>
      </div>
    )
  }
}

class ArtistGrid extends React.Component {

  render() {
    return (
      <ul className='space-list-items'>
        <li>
          <img className='Artist-Pic' src={this.props.img} alt={'Avatar for ' + this.props.artistName}/>
        </li>
        <li>
          <a href={this.props.url}>{this.props.artistName}</a>
        </li>
        <li>{this.props.playCount}
          plays</li>
      </ul>
    )
  }
}

class FavouriteArtist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      img: "https://lastfm-img2.akamaized.net/i/u/174s/885f2fc115479f7a9e48ffa827fbec1a.png",
      artist: "Amine",
      plays: "32"
    }
  }

  render() {
    return (
      <div>
        <div className='column'>
          <img className='Artist-Pic' src={this.state.img} alt={"Picture of: " + this.state.artist}/>
          <h2 className='username'>{this.state.artist}</h2>
          <p>{this.state.plays}
            plays</p>
        </div>
      </div>

    )
  }

}

export default Music
