const BarzLogo = require('./BarzLogo.PNG');
var projects = [
  {
   img: "http://sas.uwaterloo.ca/~wang/img/uw.png",
   title: "UWaterloo Machine Learning Lab",
   url: "https://uwaterloo.ca/scholar/mcrowley/lab",
   chipData: [
     {
       key: 0,
       label: 'TensorFlow'
     }, {
       key: 1,
       label: 'Python'
     }, {
       key: 2,
       label: 'Azure'
     }
   ]
  },
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
        label: 'TensorFlow'
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
  }
].slice(0, 3)

module.exports = projects;
