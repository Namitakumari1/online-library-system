import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooks() {

  // State for search input
  const [search, setSearch] = useState("");

  // Getting query parameter from URL
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  // Getting books from Redux store
  const books = useSelector((state) => state.books);

  // Filtering books based on search and category
  const filteredBooks = books.filter((book) => {

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      !category || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">

      <h2 className="page-title">Browse Books</h2>

      {/* Showing selected category */}
      {category && (
        <h3 className="category-label">
          Category: {category}
        </h3>
      )}

      {/* Search Input */}
      <input type="text" placeholder="Search by title or author" className="search-input"
         value={search} onChange={(e) => setSearch(e.target.value)}
      />

      {/* Book List */}
      <div className="book-list">

        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">

            <h3 className="book-title">{book.title}</h3>

            <p className="book-author">{book.author}</p>

            <Link to={`/book/${book.id}`} className="details-link">
              View Details
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BrowseBooks;