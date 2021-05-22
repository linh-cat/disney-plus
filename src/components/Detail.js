import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import db from "./firebase";

function Detail() {
  const history = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          // history.push("/");
        }
      });
  }, []);

  console.log(movie);

  return (
    <Container>
      <Background>
        <img src={movie && movie?.backgroundImg} />
      </Background>
      <ImageTitle>
        <img src="/images/image__title.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>+</AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Controls>
      <SubTitle>{movie && movie?.subTitle}</SubTitle>
      <Description>{movie && movie?.description}</Description>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-right: 20px;
  text-transform: uppercase;
  padding: 0px 20px;
  border: none;
  background: rgb(249, 249, 249);
  letter-spacing: 1px;
  cursor: pointer;
`;

const TrailerButton = styled(PlayButton)`
  background: transparent;
  border: 1px solid rgb(249, 249, 249);
  color: #fff;
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #fff;
  font-size: 30px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  margin-right: 20px;
  cursor: pointer;
`;
const GroupButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const SubTitle = styled.div`
  margin-top: 26px;
  font-size: 15px;
`;
const Description = styled(SubTitle)`
  min-height: 20px;
`;

export default Detail;
