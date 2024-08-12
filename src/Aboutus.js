

// export default Aboutus;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure this file exists for additional styles
import { Link } from 'react-router-dom';

// Head Component
function Head() {
    return (
        <div className="jumbotron">
            <h1 className=" font-weight-bold card-title display-4 text-center">I.T Buddy</h1><br></br>
            <p className="lead">
            IT Buddy is your trusted partner in navigating the complex business technology landscape. We offer managed IT support, cloud solutions, cybersecurity, network services, data management, and custom software development. Our mission is to align technology with business goals, driving innovation and success for our clients.
            </p>
            <hr className="my-4" />
            <p>Is there anything specific you’d like to know more about?</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/contact" role="button">Contact Us</Link>
            </p>
        </div>
    );
}

// Card Component
function Card({ imgSrc, title, text }) {
    return (
        <div className="card mb-4" style={{ width: '18rem' }}>
            <img className="card-img-top" src={imgSrc} alt={title} />
            <div className="card-body">
                <h5 className="font-weight-bold card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}

// Aboutus Component
function Aboutus() {
    return (
        <div className="Aboutus">
            <Head /> {/* Add the Head component at the top */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            imgSrc="https://spectrum.ieee.org/media-library/illustration-of-software-development-in-the-cloud.jpg?id=25591710&width=1200&height=900"
                            title="Software Development"
                            text="Full Stack System development combined with integrated with Cloud Hosting to power up any solutions in the digital age!"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            imgSrc="https://my.element14.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/technology/articles/2518619/2518619-smart-retail.jpg?width=1200&height=900"
                            title="Retail and Online Stores"
                            text="Offers a wide range of computer components including CPUs, GPUs, RAM, motherboards, and more. Also provides a variety of PC parts and allows customers to build their own computer."
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            imgSrc="https://savvycomsoftware.com/wp-content/uploads/2021/03/tech-consulting-services-1.jpg"
                            title="Consultation and Support"
                            text="Provide expert advice to businesses, helping them achieve goals through research, analysis, and strategic recommendations."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
