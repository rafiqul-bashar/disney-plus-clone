import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Actions>
        <ActionsLogo1 src="/images/cta-logo-one.svg" />
        <SignUp>SignUp</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for with a Disney+
          subscirption. As of 03/26/22, the price and The Disney Bundle will
          increase by $1
        </Description>
        <ActionsLogo1 src="/images/cta-logo-two.png" />
      </Actions>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

const Actions = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ActionsLogo1 = styled.img``;
const ActionsLogo2 = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 15px;
  letter-spacing: 1.5px;
  color: #f9f9f9;
  text-align: center;
  line-height: 1.5;
`;
