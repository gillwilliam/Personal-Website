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
   ],
    description: ["•	Built a forest fire simulator with custom importable starting states and customizable burn policies to train reinforcement learning models", "•	Modeling the spread of the fire with tensor arithmetic, providing the probability of fire spreading to any cell given current state",],
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
    ],
    description: ["•	Created endpoints for users to easily query for relevant information", "•	Leverage the API to build and test fantasy basketball seasons to validate drafting strategies, while placing first in those league for 3 years in a row", "•	Created a salary estimator to see which players are overvalued on their current contracts",],
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
    ],
    description:["•	Developed a script by creating an analysis engine to analyze music in search of songs with interesting lyrics and patterns", "•	Considers many parameters including rhyme density and alliterations",],
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
