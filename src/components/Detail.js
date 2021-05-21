import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/background__detail.jpg" />
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
      <SubTitle>2020 - 7m - Family, Fanta, Kids, Animation</SubTitle>
      <Description>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Description>
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
`;
const GroupButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.5);
`;

const SubTitle = styled.div`
  margin-top: 26px;
  font-size: 15px;
`;
const Description = styled(SubTitle)`
  min-height: 20px;
`;

export default Detail;
