import React from 'react';
import ResourceNav from '../../Components/ResourceNav';
import topicData from '../../data/topicData.json';

function Resources() {
  return (
    <div className="resources">
      <ResourceNav topics={topicData} />
      <p><b>Get started by picking one of the body part to explore</b></p>
      <img src="/img/resourceImg.jpg" className="Resource-img" alt="person hit a volleyball" />
    </div>
  );
}

export default Resources;