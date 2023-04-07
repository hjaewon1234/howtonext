import { useEffect, useState } from "react";
import Head from "next/head";
import Seo from "@/components/Seo";

const API_KEY = "60dfbe512725b7dd377ff63a70fad821";

export default function Home() {
  const [movies, setMovies] = useState("");
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  console.log(movies, "movies");
  return (
    <div>
      <Head>
        <title>home이다 제발</title>
      </Head>
      <Seo title={"Home"} />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <div>{movies}</div>
    </div>
  );
}
