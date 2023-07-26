import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';
import s from './Casting.module.css'


const  baseImageUrl = 'https://image.tmdb.org/t/p/';

const Casting = () => {
    const [characters, setCharacters] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const fetchCaracters = async () => {
            try{
                const response = await api.MovieCredits(movieId);
                setCharacters(response.cast)
            }
            catch(e) {
                console.log(e)
            }
        };
        fetchCaracters();
    }, [movieId]);

    return (
      <>
        {characters.length !== 0 ? (
          <Container>
            <ul className={s.chr_container}>
              {characters.map(({ cast_id, name, profile_path, character }) => (
                <li key={cast_id} className={s.chr_card}>
                  <div>
                    <img
                      src={
                        profile_path
                          ? `${baseImageUrl}w200${profile_path}`
                          : "https://via.placeholder.com/300/"
                      }
                      alt={name}
                      className={s.chr_img}
                    />
                    <p className={s.chr_name}>{name}</p>
                    <p className={s.chr}>Character: {character}</p>
                    {!profile_path && <p> image not available </p>}
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        ) : (
          <Typography variant="h5">
            We dont have any characters for this movie
          </Typography>
        )}
      </>
    );
}

export default Casting;