import React from "react";
import { BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import mockBookDetails from "./pages/mockData";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import EditPage from "./pages/EditPage";
import Admin from "./pages/Admin";
const App = () => {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element= {<BookDetails data={mockBookDetails} />}  />
        <Route path="login" element= {<Login />} />
        <Route path="edit" element= {<EditPage />} />
        <Route path="admin" element= {<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
