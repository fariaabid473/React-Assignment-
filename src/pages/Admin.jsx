import React from "react";
import Navbar from "../components/Navbar";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 mt-5">
        <div className="container col-md-8">
          <div className="row text-center mb-4">
            <div className="col-md-3">
              <div className="card p-3 border">
                <h5>Books</h5>
                <h3>2352</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 border">
                <h5>Authors</h5>
                <h3>652</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 border">
                <h5>Quotes</h5>
                <h3>34352</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 border">
                <h5>Hikayat</h5>
                <h3>6298</h3>
              </div>
            </div>
          </div>
          <div className="card p-3 border">
            <h5 className="mb-3">Most Liked</h5>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Title of Hikayat</h6>
                  <small>Author Name</small>
                  <div className="text-danger">
                    <i className="bi bi-heart-fill"></i> 567
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Title of Book</h6>
                  <small>Author Name</small>
                  <div className="text-danger">
                    <i className="bi bi-heart-fill"></i> 356
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Title of Quote</h6>
                  <small>Author Name</small>
                  <div className="text-danger">
                    <i className="bi bi-heart-fill"></i> 567
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Title of Poem</h6>
                  <small>Author Name</small>
                  <div className="text-danger">
                    <i className="bi bi-heart-fill"></i> 567
                  </div>
                </div>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
