import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BookDetails = ({ data }) => {
  const {
    name,
    author,
    category,
    label,
    description,
    hikayatOfTheDay,
    quoteOfTheDay,
    bookOfTheDay,
    poemOfTheDay,
    famousHikayat,
    famousQuote,
    famousBook,
    stories,
    relatedBooks,
  } = data;

  return (
    <div>
      <Navbar />
      <main className="container my-5">
        <div className="row">
          {/* Left Column (Main Content) */}
          <div className="col-md-8">
            {/* Book Title Section */}
            <div className="mb-4">
              <h1 className="display-4">{name}</h1>
              <p className="text-muted">
                <strong>{author}</strong> <br />
                <strong>{" "}{category}</strong> <br />
                <strong>{label}</strong>
              </p>
            </div>


            {/* Description Section */}
            <div className="mb-5">
              <div className="card border-0 fs-6 p-3">
                <p className="card-text">{description}</p>
              </div>
            </div> 
            <div className=" col-12 mb-4 d-flex justify-content-center align-items-center bg-light text-dark" 
         style={{
           width: "90%", 
           height: "100px", 
           backgroundColor: "#D9D9D9", 
           border: "1px solid #ccc",
           borderRadius: "4px"
         }}>
      <p className="m-0 fw-bold">Advertisement</p>
    </div>
    <div className="mb-5">
              <div className="card border-0 fs-6 p-3">
                <p className="card-text">{description}</p>
              </div>
            </div>

            {/* Stories Section */}
            <div className="mb-5">
              <div className="card shadow-sm p-4">
                <h3 className="card-title">Stories from the Book</h3>
                <ul className="list-group list-group-flush">
                  {stories.map((story, index) => (
                    <li className="list-group-item" key={index}>
                      {story}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Books Section */}
            <div className="mb-5">
              <div className="card shadow-sm p-4">
                <h3 className="card-title">Related Books</h3>
                <ul className="list-group list-group-flush">
                  {relatedBooks.map((book, index) => (
                    <li className="list-group-item" key={index}>
                      {book}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column (Highlights Section) */}
          <div className="col-md-4">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="border-0 text-center ">
                  <h5 className="card-title  text-decoration-underline">Hikayat of the Day</h5>
                  <p className="card-text ">{hikayatOfTheDay}</p>
                </div>
              </div>
              <div className="col-12  mb-3">
                <div className="card border-0 p-3  text-center">
                  <h5 className="card-title  text-decoration-underline">Quote of the Day</h5>
                  <p className="card-text">{quoteOfTheDay}</p>
                </div>
              </div>
              <div className="col-12 mb-4">
                <div className="card border-0  text-center ">
                  <h5 className="card-title text-decoration-underline">Book of the Day</h5>
                  <p className="card-text">{bookOfTheDay}</p>
                </div>
              </div>
             
              <div className="col-12 mb-4">
                <div className="card border-0 text-center">
                  <h5 className="card-title text-decoration-underline">Poem of the Day</h5>
                  <p className="card-text">{poemOfTheDay}</p>
                </div>
              </div>
              <div className=" col-12 mb-4 d-flex justify-content-center align-items-center bg-light text-dark" 
         style={{
           width: "300px", 
           height: "350px", 
           marginLeft:"20%",
           backgroundColor: "#D9D9D9", 
           border: "1px solid #ccc",
           borderRadius: "4px"
         }}>
      <p className="m-0 fw-bold">Advertisement</p>
    </div>
    <div className="col-12 mb-4">
                <div className="card border-0 ml-5 p-3 text-center ">
                  <h5 className="card-title text-decoration-underline">Famous Hikayat</h5>
                  <p className="card-text ">{famousHikayat}</p>
                </div>
              </div>
              <div className="col-12 mb-4">
                <div className="card border-0 ml-5 p-3 text-center ">
                  <h5 className="card-title text-decoration-underline">Famous Quote</h5>
                  <p className="card-text">{famousQuote}</p>
                </div>
              </div>
              <div className="col-12 mb-4">
                <div className="card border-0 ml-5 p-3 text-center ">
                  <h5 className="card-title text-decoration-underline">Famous Book</h5>
                  <p className="card-text">{famousBook}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetails;
