import React from 'react';
import { Link } from 'react-router-dom';

function ResourceNav({ topics, currentTopicId }) {
  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {topics.map((topic, index) => (
          <li key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
            <Link 
              to={`/${topic.topicid}`} 
              style={{ 
                textDecoration: 'none', 
                padding: '5px 10px', 
                border: '1px solid black', 
                borderRadius: '5px', 
                background: 'none', 
                cursor: 'pointer' 
              }}
            >
              {topic.topicid}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ResourceNav;
