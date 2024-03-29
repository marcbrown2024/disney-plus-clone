import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Movies() {
  const movies = useSelector(selectMovies);

  const recommendedMovies = movies.filter(
    (movie) => movie.type === "recommend"
  );
  const newMovies = movies.filter((movie) => movie.type === "new");
  const originalsMovies = movies.filter((movie) => movie.type === "original");
  const trendingMovies = movies.filter((movie) => movie.type === "trending");

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {recommendedMovies.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={`Recommended: ${movie.title}`} />
            </Link>
          </Wrap>
        ))}
      </Content>
      <h4>New To Disney+</h4>
      <Content>
        {newMovies.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={`New: ${movie.title}`} />
            </Link>
          </Wrap>
        ))}
      </Content>
      <h4>Originals</h4>
      <Content>
        {originalsMovies.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={`Originals: ${movie.title}`} />
            </Link>
          </Wrap>
        ))}
      </Content>
      <h4>Trending</h4>
      <Content>
        {trendingMovies.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={`Trending: ${movie.title}`} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding-bottom: 20px;
`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
