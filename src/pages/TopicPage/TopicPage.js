import React from 'react';
import { useParams } from 'react-router-dom';
import ResourceNav from '../../Components/ResourceNav';
import topicData from '../../data/topicData.json';

function TopicPage({ topic }) {
  const { topicid } = useParams();

  if (!topic) return <div>Topic not found</div>;

  return (
    <div>
      <ResourceNav topics={topicData} currentTopicId={topicid} />
      <h2>{topic.topicid}</h2>
      {topic.sections.map((section, idx) => (
        <div key={idx}>
          {section.title && <h3>{section.title}</h3>}
          <ul>
            {section.qa.map((qa, i) => (
              <li key={i}>
                {qa.question && <p><strong>{qa.question}</strong></p>}
                {qa.answerArr.map((answer, j) => (
                  <div key={j}>
                    {answer.type === 'url' ? (
                      <span dangerouslySetInnerHTML={{ __html: answer.key }} />
                    ) : answer.type === 'youtube' ? (
                      <div>
                        <p>{answer.name}</p>
                        <iframe
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${answer.videoId}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : null}
                    {/* Display images and videos under the "Anatomy" section */}
                    {section.title === 'Anatomy' && answer.type === 'image' ? (
                      <img src={answer.url} alt="Image" />
                    ) : section.title === 'Anatomy' && answer.type === 'video' ? (
                      <iframe
                        width="560"
                        height="315"
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

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import ResourceNav from '../../Components/ResourceNav';
// import topicData from '../../data/topicData.json';

// function TopicPage({ topic }) {
//   const { topicid } = useParams();

//   if (!topic) return <div>Topic not found</div>;

//   return (
//     <div>
//       <ResourceNav topics={topicData} currentTopicId={topicid} />
//       <h2>{topic.topicid}</h2>
//       {topic.sections.map((section, idx) => (
//         <div key={idx}>
//           {section.title && <h3>{section.title}</h3>}
//           <ul>
//             {section.qa.map((qa, i) => (
//               <li key={i}>
//                 {qa.question && <p><strong>{qa.question}</strong></p>}
//                 {qa.answerArr.map((answer, j) => (
//                   <div key={j}>
//                     {answer.type === 'url' ? (
//                       <span dangerouslySetInnerHTML={{ __html: answer.key }} />
//                     ) : answer.type === 'youtube' ? (
//                       <div>
//                         <p>{answer.name}</p>
//                         <iframe
//                           width="560"
//                           height="315"
//                           src={`https://www.youtube.com/embed/${answer.videoId}`}
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         ></iframe>
//                         {answer.description && <p>{answer.description}</p>}
//                       </div>
//                     ) : null}
//                   </div>
//                 ))}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TopicPage;
