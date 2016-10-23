import React from 'react'
import {Link, IndexLink} from 'react-router'

class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault();
    alert("not yet wired!");
  };
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li>
              <Link to='/timer' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Timer</Link>
            </li>
            <li>
              <Link to='/countdown' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className='menu'>
            <li className="menu-text">
              Created by: <a href="http://www.robertcwilson.com" target="_blank">Robert Wilson</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
