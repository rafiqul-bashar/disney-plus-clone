import React from "react";
import styled from "styled-components";
function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.themoviedb.org/t/p/w130_and_h195_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.themoviedb.org/t/p/w130_and_h195_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.2);
  cursor: pointer;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
      rgba(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
