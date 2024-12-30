import React from 'react';

function Footer() {
  return (
    <>
    <footer className="bg-light mt-4 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h5>Hikayat</h5></div>
            <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Category</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul></div>
            <div className="col-md-3">
              <p>Hikayat</p>
              <p>Quotes</p>
              <p>Riddles</p>
              <p>Poems</p>
            </div>
          <div className="col-md-4">
            <h5>Location</h5>
            <p>Email</p>
            <p>Contact Number</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
