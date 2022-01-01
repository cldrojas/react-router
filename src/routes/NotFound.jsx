import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <Link to="/" className="btn btn-outline-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
