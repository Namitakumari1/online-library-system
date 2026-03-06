// AddBook component contains form to add new books into Redux store
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";

function AddBook() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form data
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setBook({
      ...book, [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!book.title || !book.author || !book.category) {
      alert("Please fill all required fields");
      return;
    }

    // Dispatch action to Redux
    dispatch(addBook({
      id: Date.now(),
      ...book
    }));

    // Redirect to browse page
    navigate("/browseBooks");
  };

  return (
    <div className="container">

      <h2 className="page-title">Add New Book</h2>

      <form onSubmit={handleSubmit} className="book-form">

        <input type="text" name="title" placeholder="Book Title" value={book.title}
           onChange={handleChange} className="form-input" required
        />

        <input type="text" name="author" placeholder="Author" value={book.author}
           onChange={handleChange} className="form-input"
        />

        <input type="text" name="category" placeholder="Category" value={book.category}
           onChange={handleChange} className="form-input"
        />

        <textarea name="description" placeholder="Description" value={book.description}
           onChange={handleChange} className="form-textarea"
        />

        <input type="number" name="rating" placeholder="Rating (1-5)" value={book.rating}
            onChange={handleChange} className="form-input" min="1" max="5"
        />

        <button type="submit" className="submit-button">
          Add Book
        </button>

      </form>

    </div>
  );
}

export default AddBook;
