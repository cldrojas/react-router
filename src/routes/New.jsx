import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const New = () => {
  let { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://api.spaceflightnewsapi.net/v3/blogs/${id}`
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container card  mt-4">
      <div className="card-title mt-4 d-flex justify-content-between align-items-center">
        <Link to="/blog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fillRule="currentColor"
            className="bi bi-arrow-left-square"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        </Link>
        <h3 className="text-center">{data.title}</h3>
      </div>
      <div className="card-body">
        <img
          className="img-fluid rounded-3 mb-3 mx-auto d-block"
          src={data.imageUrl}
          alt="test"
        />
        <h4 className="text-center">{data.summary}</h4>
      </div>
    </div>
  );
};

export default New;
