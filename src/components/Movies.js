import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="/images/movie-image.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/movie-image.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/movie-image.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/movie-image.jpg" />
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10px;
  padding: 30px 0px 26px;
  h4 {
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.02);
    border: 3px solid rgba(249, 249, 249, 0.9);
    transition: all 250ms cubic-bezier(0.25, 0.25, 0.25, 0.25);
  }
`;

export default Movies;
