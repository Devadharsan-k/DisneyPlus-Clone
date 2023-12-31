import React, { useState } from 'react';
import styled from 'styled-components';
import TrailerModal from './TrailerModel';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  const [videoKeys, setVideoKeys] = useState(null);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);

  const handleKey = () => {
    fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=dece40c663415ca34f36519d0e338168`)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          const key = data.results[0].key;
          setVideoKeys(key);
          setTrailerModalOpen(true);
        }
      })
      .catch(error => {
        console.error("Error fetching video data:", error);
      });
  };

  const closeTrailerModal = () => {
    setTrailerModalOpen(false);
  };

  return (
    <>
      <Wrap onClick={handleKey}>
        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
      </Wrap>
      {trailerModalOpen && (
        <TrailerModal
          ytTrailer={`https://www.youtube.com/embed/${videoKeys}`}
          onClose={closeTrailerModal}
        />
      )}
    </>
  );
};



const Wrap = styled.div`
  padding-top: 140%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-size: cover;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: contain;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;


export default MovieCard
