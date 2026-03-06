import { Link } from "react-router-dom";

// Navbar component for navigation between pages
function Navbar() {
  return (
    <div className="navbar">

      {/* Navigation Menu */}
      <ul className="nav-list">

        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/browseBooks" className="nav-link">
            Browse Books
          </Link>
        </li>

        <li>
          <Link to="/addBook" className="nav-link">
            Add Book
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Navbar;