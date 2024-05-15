import React from 'react';
import ResourceNav from '../../Components/ResourceNav';
import topicData from '../../data/topicData.json';

function Resources() {
  return (
    <div className="resources">
      <ResourceNav topics={topicData} />
    </div>
  );
}

export default Resources;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import topicData from '../../data/topicData.json';

// function Resources() {
//   return (
//     <div className="resources">
//       {/* Navbar */}
//       <nav>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {topicData.map((topic, index) => (
//             <li key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
//               {/* Render each topic as a Link styled like a button */}
//               <Link 
//                 to={`/${topic.topicid}`} 
//                 style={{ 
//                   textDecoration: 'none', 
//                   color: 'black', 
//                   padding: '5px 10px', 
//                   border: '1px solid black', 
//                   borderRadius: '5px', 
//                   background: 'none', 
//                   cursor: 'pointer' 
//                 }}
//               >
//                 {topic.topicid}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Resources;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import topicData from './topicData.json';

// function Resources() {
//   return (
//     <div className="resources">
//       {/* Navbar */}
//       <nav>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {topicData.map((topic, index) => (
//             <li key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
//               <h1><Link to={`/${topic.topicid}`} style={{ textDecoration: 'none', color: 'black' }}>{topic.topicid}</Link></h1>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Content */}
//       {topicData.map((topic, index) => (
//         <div key={index}>
//           <h2>{topic.topicid}</h2>
//           {topic.qa.map((qa, idx) => (
//             <div key={idx}>
//               <h3>{qa.question}</h3>
//               <ul>
//                 {qa.answerArr.map((answer, i) => (
//                   <li key={i}>
//                     {answer.type === 'url' ? (
//                       <span dangerouslySetInnerHTML={{ __html: answer.key }} />
//                     ) : answer.type === 'youtube' ? (
//                       <div>
//                         <p>{answer.name}</p>
//                         <iframe
//                           width="560"
//                           height="315"
//                           src={`https://www.youtube.com/embed/${answer.videoId}`}
//                           // title={qa.question} // Use the question as the title
//                           // frameBorder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         ></iframe>
//                       </div>
//                     ) : null}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Resources;



// import React from "react";
// import topicData from "./topicData.json"; // Import your JSON data

// function Resources() {
//   return (
//     <div className="resources">
//       {topicData.map((topic, index) => (
//         <div key={index}>
//           <h3>{topic.topicid}</h3>
//           {topic.qa.map((qa, idx) => (
//             <div key={idx}>
//               <h4>{qa.question}</h4>
//               <ul>
//                 {qa.answerArr.map((answer, i) => (
//                   <li key={i}>
//                     <span dangerouslySetInnerHTML={{ __html: answer.key }} />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Resources;
// // function resources () {
// //   return (
// //       <div className = "resources">
// //       </div>
// //   );
// // }
// // export default resources;