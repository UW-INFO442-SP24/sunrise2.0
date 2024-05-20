

import React from 'react';
import './diagram.css';

const Diagram = () => {
  return (
    <div className="image-container">
      <img src="img/bodyDiagramHighlight.png" alt="Human Body" useMap="#bodymap" />
      <map name="bodymap">
        <area shape="rect" coords="150,50,230,150" href="https://www.webmd.com/pain-management/shoulder-pain" alt="Shoulders" target="_blank" />
        <area shape="rect" coords="140,400,210,470" href="https://www.webmd.com/pain-management/knee-pain" alt="Knees" target="_blank" />
        <area shape="rect" coords="140,500,210,570" href="https://www.webmd.com/pain-management/ankle-pain" alt="Ankles" target="_blank" />
        <area shape="rect" coords="150,200,200,350" href="https://www.webmd.com/back-pain/ss/slideshow-back-care" alt="Back" target="_blank" />
      </map>
    </div>
  );
};

export default Diagram;
