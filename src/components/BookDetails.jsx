// BookDetails component shows detailed information about a selected book
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {

  // Getting book id from URL
  const { id } = useParams();

  // Access books from Redux store
  const books = useSelector((state) => state.books);

  // Find the selected book
  const book = books.find((b) => b.id === Number(id));

  // If book not found
  if (!book) return <h2 className="not-found">Book not found</h2>;

  return (
    <div className="book-details-container">

      <h2 className="book-title">{book.title}</h2>

      <p className="book-author">
        <strong>Author:</strong> {book.author}
      </p>

      <p className="book-category">
        <strong>Category:</strong> {book.category}
      </p>

      <p className="book-description">
        <strong>Description:</strong> {book.description}
      </p>

      <p className="book-rating">
        <strong>Rating:</strong> {book.rating}
      </p>

      <Link to="/browseBooks" className="back-button">
        Back to Browse
      </Link>

    </div>
  );
}

export default BookDetails;