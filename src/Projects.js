const BarzLogo = require('./BarzLogo.PNG');
var projects = [
  {
    img: "https://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/gameinfo/icon2.jpg",
    title: "NBA-API",
    url: "https://github.com/gillwilliam/NBA-API",
    chipData: [
      {
        key: 0,
        label: 'NodeJS'
      }, {
        key: 1,
        label: 'Express'
      }, {
        key: 2,
        label: 'ES6'
      }
    ]
  }, {
    img: BarzLogo,
    title: "Barz",
    url: "https://github.com/gillwilliam/Barz",
    chipData: [
      {
        key: 0,
        label: 'Java'
      }, {
        key: 1,
        label: 'JSoup'
      }, {
        key: 2,
        label: 'Gson'
      }
    ]
  }, {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dollar_sign_in_circle.svg/2000px-Dollar_sign_in_circle.svg.png",
    title: "Tabb",
    url: "https://github.com/TateHodgkinson/Tabb",
    chipData: [
      {
        key: 0,
        label: 'Android'
      }, {
        key: 1,
        label: 'Google Vision'
      }, {
        key: 2,
        label: 'Firebase'
      }
    ]
  }, {
    img: "http://sas.uwaterloo.ca/~wang/img/uw.png",
    title: "University of Waterloo",
    url: "http://www.viarail.ca/en",
    chipData: [
      {
        key: 0,
        label: 'React'
      }, {
        key: 1,
        label: 'NodeJS'
      }, {
        key: 2,
        label: 'SQL'
      }
    ]
  }
].slice(0, 3)

module.exports = projects;
