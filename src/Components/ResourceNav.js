import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ResourceNav.css';

function ResourceNav({ topics }) {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Get the current path without leading slash

  return (
    <nav className='top-center-nav'>
      <ul className="nav-list">
        {topics.map((topic, index) => (
          <li key={index} className={`nav-item ${topic.topicid === currentPath ? 'active' : ''}`}>
            <Link to={`/${topic.topicid}`} className="nav-link">
              {topic.topicid}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ResourceNav;
