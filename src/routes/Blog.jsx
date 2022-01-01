import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  const { data, error, loading } = useFetch(
    "https://api.spaceflightnewsapi.net/v3/blogs"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Blog</h1>

      <input
        type="text"
        className="form-control mb-2"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />
      {data
        .filter((item) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let title = item.title.toLowerCase();
          return title.includes(filter.toLowerCase());
        })
        .map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card p-4 m-3">
              <h5>{item.title}</h5>
              <p>{item.summary}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Blog;
