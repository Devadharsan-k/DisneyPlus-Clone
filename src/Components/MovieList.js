import { styled } from 'styled-components';
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';

const MovieList = ({genereId}) => { 

    const[movieList, setMovieList] = useState([]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        getMovieByGenereId();
      }, 3500)
    },[])

    const getMovieByGenereId =() => {
        GlobalApi.getMovieByGenreId(genereId).then(resp => {
          setMovieList(resp.data.results);
          console.log(resp.data);
        })
    }
  return (
    <Container>
      <Content>
      { movieList.map((item, index)=>index<=7 &&(
        <MovieCard movie={item}/>
      ))}
      </Content>   
    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 26px;

`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;



export default MovieList