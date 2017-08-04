const axios = require('axios');

var URLA = "https://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=b7e45d98db92c7ed613e66c3f2a02618&user=w_gill&format=json";

var URLB = "https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=w_gill&api_key=b7e45d98db92c7ed613e66c3f2a02618&format=json";

function getArtists() {
  return axios.get(URLA).then(function(response) {
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 2000
      return response.data.artists.artist;
  });
}

function getAlbums() {
  return axios.get(URLB).then(function(response) {
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 2000
      return response.data.topalbums.album;
  });
}

export {getArtists, getAlbums};
