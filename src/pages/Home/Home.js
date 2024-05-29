import '../../index.css';
function Home() {
  return (
    <div className="home">
      <div className="img-content">
        <img
          src="/img/homeBg.jpg"
          className="HomePage-img"
          alt="Homepage Background"
          width="1920"
          height="1080"
        />
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
              a recreational player looking to prevent injuries, or a coach seeking guidance,  <br />
              we're here to support your journey to peak performance on the court. <br />
              Our comprehensive approach combines rehabilitation tutorial, <br />
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
