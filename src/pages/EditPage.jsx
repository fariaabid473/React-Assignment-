import React, { useState } from "react";
import Navbar from "../components/Navbar";

const EditPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    bookName: "",
    pageName: "",
    tags: [],
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      setFormData({ ...formData, tags: [...formData.tags, value] });
      e.target.value = "";
      e.preventDefault();
    }
  };

  const handleTagRemove = (tag) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
    <Navbar />
    <div className="container my-5 d-flex justify-content-center">
      <div className="border rounded p-4 w-50">
        <h2 className="text-center mb-4">Add/Edit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authorName" className="form-label">Author Name</label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              className="form-control"
              value={formData.authorName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookName" className="form-label">Book Name</label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              className="form-control"
              value={formData.bookName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pageName" className="form-label">Page</label>
            <select
              id="pageName"
              name="pageName"
              className="form-control"
              value={formData.pageName}
              onChange={handleInputChange}
            >
              <option value="">Page Name</option>
              <option value="Page 1">Page 1</option>
              <option value="Page 2">Page 2</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">Tags</label>
            <input
              type="text"
              id="tags"
              placeholder="Tags"
              className="form-control"
              onKeyDown={handleTagChange}
            />
            <div className="mt-2">
              {formData.tags.map((tag, index) => (
                <span key={index} className="badge bg-primary me-2">
                  {tag} <span onClick={() => handleTagRemove(tag)}>x</span>
                </span>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input
              type="file"
              id="image"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              className="form-control"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="text-center">
          <button type="button" className="btn btn-secondary me-3">
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Add
            </button>
           
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditPage;
