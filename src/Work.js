const team610 = require('./610.png');
var work = [
{
    img: "https://www.viarail.ca/sites/all/files/media/images/logo/logo_viarail-large-carre.png",
    title: "Via Rail",
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
  },
  {
    img: "https://www.caubo.ca/wp-content/uploads/2016/11/TD-Asset-Management.jpg",
    title: "TD Asset Management",
    url: "https://www.td.com/ca/en/asset-management/home/",
    chipData: [
      {
        key: 0,
        label: 'React'
      }, {
        key: 1,
        label: 'Python'
      }, {
        key: 2,
        label: 'Redux'
      }
    ]
  },
  {
      img: "https://d323e8de356d3090e307b3d5-qoxugpjbdnjy.netdna-ssl.com/wp-content/uploads/2016/11/ThomsonReuters-150x150.png",
      title: "Thomson Reuters",
      url: "https://www.thomsonreuters.com/en.html",
      chipData: [
        {
          key: 0,
          label: 'Java Spring'
        }, {
          key: 1,
          label: 'Python'
        }, {
          key: 2,
          label: 'Google Cloud APIs'
        }
      ]
    },
  {
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
  },
  {
    img: team610,
    title: "Team 610",
    url: "http://team610.com/",
    chipData: [
      {
        key: 0,
        label: 'Robotics'
      }, {
        key: 1,
        label: 'Java'
      }, {
        key: 2,
        label: 'C'
      }
    ]
  }
].slice(0, 3).reverse()

module.exports = work;
