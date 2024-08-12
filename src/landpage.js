import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="container-style">
      {/* Hero Section */}
      <header className="hero-section-style">
        <div>
          {/* Typing animation text */}
          <h2 className="typing-animation">Welcome to IT Buddy</h2>
          {/* Static text */}
          <p className="lead">Your Tech Partner for Success</p>
        </div>
      </header>

      {/* Main content section with cards */}
      <section>
        <div className="container">
          <div className="row">
            {/* Web Development card */}
            <div className="col-md-4 mb-4">
              <div
                className="card card-style card-hover-style"
              >
                <img
                  src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
                  className="card-img-top card-img-style"
                  alt="Web Development"
                />
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    We offer custom web development services to build responsive, user-friendly websites that meet your business needs.
                  </p>
                </div>
              </div>
            </div>

            {/* IT Support card */}
            <div className="col-md-4 mb-4">
              <div
                className="card card-style card-hover-style"
              >
                <img
                  src="https://www.orientsoftware.com/Themes/Content/Images/blog/2022-12-19/it-support-and-services.jpg"
                  className="card-img-top card-img-style"
                  alt="IT Support"
                />
                <div className="card-body">
                  <h5 className="card-title">IT Support</h5>
                  <p className="card-text">
                    Our IT support services ensure your technology runs smoothly, with quick resolutions to any technical issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Consulting card */}
            <div className="col-md-4 mb-4">
              <div
                className="card card-style card-hover-style"
              >
                <img
                  src="https://paradoxmarketing.io/wp-content/uploads/2019/10/a-guide-to-the-different-types-of-consulting-services-min.png"
                  className="card-img-top card-img-style"
                  alt="Consulting"
                />
                <div className="card-body">
                  <h5 className="card-title">Consulting</h5>
                  <p className="card-text">
                    Get expert advice on how to leverage technology to achieve your business goals and improve efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

