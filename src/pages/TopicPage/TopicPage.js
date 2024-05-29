import React from 'react';
import { useParams } from 'react-router-dom';
import ResourceNav from '../../Components/ResourceNav';
import topicData from '../../data/topicData.json';
import '../../index.css';

function TopicPage({ topic }) {
  const { topicid } = useParams();

  if (!topic) return <div role="alert">Topic not found</div>;

  return (
    <div className="container">
      <ResourceNav topics={topicData} currentTopicId={topicid} className="sticky-nav" />
      <h1 id="topic-title">{topic.topicid}</h1>
      {topic.sections.map((section, idx) => (
        <div key={idx} aria-labelledby={`section-title-${idx}`}>
          {section.title && <h2 id={`section-title-${idx}`}>{section.title}</h2>}
          <ul>
            {section.qa.map((qa, i) => (
              <li key={i}>
                {qa.question && <h3><strong>{qa.question}</strong></h3>}
                {qa.answerArr.map((answer, j) => (
                  <div key={j}>
                    {answer.type === 'youtube' && (
                      <div role="group" aria-labelledby={`video-title-${i}-${j}`}>
                        <p id={`video-title-${i}-${j}`}>{answer.name}</p>
                        {answer.description && (
                          <div className="answer-description" aria-labelledby={`video-description-${i}-${j}`}>
                            <p>{answer.description}</p>
                          </div>
                        )}
                        <iframe
                          title={`YouTube Video: ${answer.name}`}
                          width="497"
                          height="280"
                          src={`https://www.youtube.com/embed/${answer.videoId}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    {section.title === 'Anatomy' && answer.type === 'video' && (
                      <div role="group" aria-labelledby={`anatomy-video-title-${i}-${j}`}>
                        <p id={`anatomy-video-title-${i}-${j}`}>{answer.name}</p>
                        <iframe
                          title={`Anatomy Video: ${answer.name}`}
                          width="497"
                          height="280"
                          src={answer.url}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TopicPage;
