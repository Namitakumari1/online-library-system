// Home component displays categories and popular books

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {

  // Getting books from Redux store
  const books = useSelector((state) => state.books);

  // Categories to display on home page
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div className="container">
      <div className="home-container">

        {/* Page Title */}
        <h2 className="home-title">Welcome to Online Library</h2>

        {/* Categories Section */}
        <div className="category-section">

          <h3 className="section-title">Categories</h3>

          <div className="category-list">
            {categories.map((cat) => (
              <Link key={cat} to={`/browseBooks?category=${cat}`} className="category-link">
                {cat} |
              </Link>
            ))}
          </div>

        </div>

        {/* Popular Books Section */}
        <div className="popular-section">

          <h3 className="section-title">Popular Books</h3>

          {books.slice(0, 3).map((book) => (
            <div key={book.id} className="book-card">

              <h4 className="book-title">{book.title}</h4>

              <Link to={`/book/${book.id}`} className="details-link">
                View Details
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>

  );
}

export default Home;