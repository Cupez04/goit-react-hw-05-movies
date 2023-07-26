import { Container, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  console.log("movieId:", movieId); // Agregar este console.log para imprimir el valor de movieId

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.reviews(movieId);
        setReviews(response.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <Container>
          {reviews.map(({ id, author, content }) => (
            <Paper
              key={id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
                mt: 3,
                p: 2,
              }}
            >
              <Typography variant="h5">Author: {author}</Typography>
              <Typography variant="p">{content}</Typography>
            </Paper>
          ))}
        </Container>
      ) : (
        <Typography variant="h5">
          We don´t have any reviews for this movie.
        </Typography>
      )}
    </>
  );
};
export default Reviews;