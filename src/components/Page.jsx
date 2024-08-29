import React from 'react';
import { Link } from 'react-router-dom';
function Page() {
  return (
    <div className="page-not-found">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Page Not Found</h2>
      <p className="error-description">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="back-home-link">Go Back to Home</Link>
    </div>
  );
}

export default Page;
