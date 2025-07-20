import { useEffect, useState } from "react";

function Dashboard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h2>Movie Dashboard</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <h4>{movie.name}</h4>
            <img src={movie.image?.medium} alt={movie.name} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
