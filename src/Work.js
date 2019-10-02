const team610 = require('./610.png');
const ZanbatoLogo = require('./ZanbatoLogo.png');
const ViaRailLogo = require('./ViaRailLogo.png');
const ThomsonReutersLogo = require('./ThomsonReutersLogo.png');
const TDLogo = require('./TDLogo.jpg');
var work = [
{
    img: ViaRailLogo,
    title: "Via Rail",
    url: "http://www.viarail.ca/en",
    role: "Innovation Engineering",
    date: "May-Sept, 2017",
    location: "Montreal, QC",
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
    ],
    description:["•	Completed a real-time, data-intensive web app that will earn VIA Rail ~$200,000/yr as a Full-Stack developer",],
  },
  {
    img: TDLogo,
    title: "TD Asset Management",
    role: "Portfolio Anayltics Developer",
    url: "https://www.td.com/ca/en/asset-management/home/",
    date: "Jan-May, 2018",
    location: "Toronto, ON",
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
    ],
    description:["•	Created a Batch Portfolio Optimization tool as part of a large suite of apps for Fixed Income Portfolio Managers","•	Used RabbitMQ (message broker) and Celery (task queue) to parallelize stages of the optimization across multiple machines"],
  },
  {
      img: ThomsonReutersLogo,
      title: "Thomson Reuters",
      role: "Software Developer Intern",
      url: "https://www.thomsonreuters.com/en.html",
      date: "Sept-Dec, 2018",
      location: "Toronto, ON",
      chipData: [
        {
          key: 0,
          label: 'Java Spring'
        }, {
          key: 1,
          label: 'Python'
        }, {
          key: 2,
          label: 'AWS'
        }
      ],
      description: ["•	Developed fast code compilation system that remotely (Azure) compiles modules in parallel, while caching results for quick distribution", "o	Will save 6 hours of compiling time of a developer’s time per week", "•	Optimized developer workflow of Java Spring application by adding plugins and writing scripts that made processes faster – e.g. Database builds are 10x faster", "•	Increased coverage of tracking analytics to improve customer experience by introducing Mixpanel and Google Analytics",]
    },
  {
      img: ZanbatoLogo,
      title: "Zanbato",
      role: "Software Engineering Intern",
      url: "https://zanbato.com/",
      date: "May-Sept, 2019",
      location: "Mountain View, CA",
      chipData: [
        {
          key: 0,
          label: 'React'
        }, {
          key: 1,
          label: 'Django REST Framework'
        }, {
          key: 2,
          label: 'iOS'
        }
      ],
      description: ["•	Introduced several performance optimizing changes including parallel pre-loading, caching, and server-side rendering using Django REST and React", "•	Extensively refactored components to use the latest React 16.8 additions", "•	Developed re-useable iOS components and styled existing views in Swift", "•	Worked with designers to accurately create the desired user experience", "•	Added comprehensive PyTest, Selenium, and Jest tests to ensure robust implementations",],
    },
  {
    img: "http://sas.uwaterloo.ca/~wang/img/uw.png",
    title: "University of Waterloo",
    url: "http://www.viarail.ca/en",
    date: "May-Sept 2017",
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
    ],
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
].slice(0, 4).reverse()

module.exports = work;
