import React from "react";
import styled from "styled-components";
import App from "../App";
function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/detailbg.jpeg" alt="" />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatch>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatch>
      </Controls>
      <SubTitle>A super awakening and calamity is born.</SubTitle>
      <Description>
        The Red Ribbon Army, an evil organization that was once destroyed by
        Goku in the past, has been reformed by a group of people who have
        created new and mightier Androids, Gamma 1 and Gamma 2, and seek
        vengeance against Goku and his family.
      </Description>
    </Container>
  );
}

export default Detail;

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
  z-index: -1;
  opacity: 0.7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  border-radius: 4px;
  height: 52px;
  border: none;
  background: rgb(249, 249, 249);
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.7px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  color: rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.4);
`;

const AddButton = styled.button`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  color: rgb(249, 249, 249);
  margin-right: 22px;
  span {
    font-size: 28px;
  }
`;
const GroupWatch = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 26px;
  min-height: 20px;
`;
const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  margin-top: 16px;
  line-height: 1.5;
`;
