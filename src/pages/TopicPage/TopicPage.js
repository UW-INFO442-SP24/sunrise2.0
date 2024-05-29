import React from 'react';
import { useParams } from 'react-router-dom';
import ResourceNav from '../../Components/ResourceNav';
import topicData from '../../data/topicData.json';
import '../../index.css';

function TopicPage({ topic }) {
  const { topicid } = useParams();

  if (!topic) return <div>Topic not found</div>;

  return (
    <div className="container">
      <ResourceNav topics={topicData} currentTopicId={topicid} className="sticky-nav" />
      <h1>{topic.topicid}</h1>
      {topic.sections.map((section, idx) => (
        <div key={idx}>
          {section.title && <h2>{section.title}</h2>}
          <ul>
            {section.qa.map((qa, i) => (
              <li key={i}>
                {qa.question && <h3><strong>{qa.question}</strong></h3>}
                {qa.answerArr.map((answer, j) => (
                  <div key={j}>
                    {answer.type === 'youtube' && (
                      <div>
                        <p>{answer.name}</p>
{answer.description && (
  <div className="answer-description">
    <p>{answer.description}</p>
  </div>
)}

                        <iframe
                          title="YouTube Video"
                          width="497"
                          height="280"
                          src={`https://www.youtube.com/embed/${answer.videoId}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    {section.title === 'Anatomy' && answer.type === 'video' ? (
                      <iframe
                        title="Anatomy Video"
                        width="497"
                        height="280"
                        src={answer.url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : null}
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