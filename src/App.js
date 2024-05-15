import React from 'react';
import Navbar from './Components/navbar';
import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import TopicPage from './pages/TopicPage/TopicPage';
import topicData from './data/topicData.json';
import Quiz from './pages/Quiz/Quiz';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="Quiz" element={<Quiz />} />
          {topicData.map((topic, index) => (
            <Route key={index} path={`/${topic.topicid}`} element={<TopicPage topic={topic} />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


// import React from 'react';
// import Navbar from './Components/navbar';
// import Quiz from './pages/Quiz/Quiz';
// import Diagram from './pages/Diagram/Diagram';
// import Resources from './pages/Resources/Resources';
// import Home from './pages/Home/Home';
// import * as ReactDOM from "react-dom/client";
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// function app () {
//     return (
//         <BrowserRouter>
//       <div className="app">
//           <Navbar/>
//           <Routes> {/* the collection of routes to match */}
//               <Route path="/" element={<Home/>} />
//               <Route path="Home" element={<Home/>} />
//               <Route path="Quiz" element={<Quiz/>} />
//               <Route path="Diagram" element={<Diagram/>} />
//               <Route path="Resources" element={<Resources/>} />
//           </Routes>
//       </div>
//     </BrowserRouter>
//     );
// }
// export default app;