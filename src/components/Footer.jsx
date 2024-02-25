import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p id='about'>Dari garasi ke panggung global, kami telah membangun <b>GalehPedia</b> dari bawah. Temukan perjalanan kami dari awal yang sederhana hingga menjadi pemimpin industri.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul>
              <li>Email: galehpedia@gmail.com</li>
              <li>Phone: +62893394023</li>
              <li>Address: Kebon Jeruk, Jakarta Barat, DKI Jakarta</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><i className="fa-brands fa-facebook" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i></a></li>
    
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
