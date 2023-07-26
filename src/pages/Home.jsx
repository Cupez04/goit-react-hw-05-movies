import { MovieList } from "../components/MovieList/MovieList";
import { Container, Typography } from "@mui/material";
import { Loader } from "../components/Loader/Loader";
import { useEffect, useState } from "react";
import api from "../services/api";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await api.fakePromise();
        const response = await api.MoviesTrending();
        setData(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container sx={{ mt: 3 }}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Typography variant="h4" component="h1" align="left">
              Trending Today
            </Typography>
            <MovieList movies={data} />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;