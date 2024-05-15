import "./Home.css";
function home () {
  return (
      <div className = "home">
        <div class="container">
          <div class="row ">
            <div class="col">
              <h1 className = "HomePage-title">
              Physical well being can be confusing, let us help.
              </h1>
              <p className = "HomePage-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div class="col">
            <img src="img/volleyBallPic.png" className="VolleyBall-IMG" />
            <button type ="button" className = "btn"><div className = 'nav-text'>Take Quiz</div></button>
            </div>
          </div>
        </div>
      </div>
  );
}
export default home;