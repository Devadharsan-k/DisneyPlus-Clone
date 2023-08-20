import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import GenereMovieList from './GenereMovieList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <GenereMovieList />
      
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

`;

export default Home
