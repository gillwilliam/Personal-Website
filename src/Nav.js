var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className='nav navbar-nav'>
          <li>
            <NavLink activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/page1'>
              Archives
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/music'>
              Music
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

module.exports = Nav;
