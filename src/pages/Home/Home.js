// import '../../index.css';

// function home () {
//   return (
//       <div className = "home">
//         <div class="container">
//           <div class="row ">
//             <div class="col">
//               <h1 className = "HomePage-title">
//               Physical well being can be confusing, let us help.
//               </h1>
//               <p className = "HomePage-paragraph">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
//               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
//               culpa qui officia deserunt mollit anim id est laborum
//               </p>
//             </div>
//             <div class="col">
//             <img src="img/volleyBallPic.png" className="VolleyBall-IMG" />
//             {/* <button type ="button" className = "btn"><div className = 'nav-text'>Take Quiz</div></button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }
// export default home;
import '../../index.css';

function Home() {
  return (
    <div className="home">
      <div className="img-content">
        <img src="/img/homeBg.jpg" className="HomePage-img" alt="Homepage Background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col text-content">
            <h1 className="HomePage-title">
              Physical well being can be confusing, let us help.
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-content">
            <p className="HomePage-paragraph">
              <b>Welcome to Healthlete! <br /> </b>
              <br />
              Your ultimate destination for volleyball rehabilitation and exercise solutions! <br />
              Whether you're a professional athlete recovering from an injury, <br />
              a recreational player looking to prevent injuries, or a coach seeking expert guidance,  <br />
              we're here to support your journey to peak performance on the court. <br />
              Our comprehensive approach combines cutting-edge rehabilitation techniques, <br />
              body diagram, and quiz to help you know your body better, <br />
              overcome challenges, enhance your skills, and stay injury-free. <br />
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>This website is for informational purposes only. Consult a qualified healthcare professional for authoritative recovery and exercise if needed<br />
          © 2024 Healthlete. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
