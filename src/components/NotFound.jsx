import { useRouteError, Link } from "react-router-dom";

function NotFound() {

  // Getting error information
  const err = useRouteError();

  return (
    <div className="error-container">

      {/* Error Title */}
      <h2 className="error-title">
        Oops!!
      </h2>

      {/* Error Message */}
      <h3 className="error-message">
        Please enter a correct path
      </h3>

      {/* Error Status */}
      <p className="error-info">
        Error: {err?.status} {err?.statusText}
      </p>

      {/* Back to Home Button */}
      <Link to="/" className="home-button">
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;