import React, { useState } from 'react';
import './diagram.css';

const Diagram = () => {
  const [tooltip, setTooltip] = useState({ display: 'none', top: 0, left: 0, text: '' });
  const [highlight, setHighlight] = useState('');

  const handleMouseOver = (e, bodyPart) => {
    const { clientX: left, clientY: top } = e;
    setTooltip({ display: 'block', top: top + 15, left: left + 15, text: bodyPart });
    setHighlight(bodyPart.toLowerCase().replace(/\s/g, '-'));
  };

  const handleMouseOut = () => {
    setTooltip({ display: 'none', top: 0, left: 0, text: '' });
    setHighlight('');
  };

  return (
    <div className="image-container">
      <div className="quiz-container">
        <h1 className="diagram-title">Healthlete Diagram</h1>
        <h2 className="instructions">Hover over a body part susceptible to a volleyball injury</h2>
      </div>
      <img src="img/bodyDiagramHighlight.png" alt="Human Body" useMap="#bodymap" />
      <map name="bodymap">
        <area shape="rect" coords="61,121,292,165" onMouseOver={(e) => handleMouseOver(e, 'Shoulders')} onMouseOut={handleMouseOut} href="/shoulder" alt="Shoulders" />
        <area shape="rect" coords="414,121,644,168" onMouseOver={(e) => handleMouseOver(e, 'Shoulders')} onMouseOut={handleMouseOut} href="/shoulder" alt="Shoulders" />
        <area shape="rect" coords="479,181,587,319" onMouseOver={(e) => handleMouseOver(e, 'Back')} onMouseOut={handleMouseOut} href="/back" alt="Back" />
        <area shape="rect" coords="121,522,235,567" onMouseOver={(e) => handleMouseOver(e, 'Knees')} onMouseOut={handleMouseOut} href="/knee" alt="Knees" />
        <area shape="rect" coords="474,520,588,565" onMouseOver={(e) => handleMouseOver(e, 'Knees')} onMouseOut={handleMouseOut} href="/knee" alt="Knees" />
        <area shape="rect" coords="116,685,230,730" onMouseOver={(e) => handleMouseOver(e, 'Ankles')} onMouseOut={handleMouseOut} href="/ankle" alt="Ankles" />
        <area shape="rect" coords="482,686,596,731" onMouseOver={(e) => handleMouseOver(e, 'Ankles')} onMouseOut={handleMouseOut} href="/ankle" alt="Ankles" />
      </map>
      <div className="tooltip" style={{ ...tooltip }}>{tooltip.text}</div>
      {highlight && <div className={`area-hover ${highlight}`}></div>}
    </div>
  );
};

export default Diagram;
