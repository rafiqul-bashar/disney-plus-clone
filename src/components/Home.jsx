import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Views from "./Views";
function Home() {
  return (
    <Container>
      <ImageSlider />
      <Views />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3vw + 5px);
  color: white;
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png");
    background-repeat: no-repeat;
    position: fixed;
    background-size: cover;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
