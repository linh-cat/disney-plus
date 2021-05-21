import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogo src="/images/cta-logo-one.svg" />
        <SignUp>Get All Theme</SignUp>
        <Description>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    background: url("/images/login-background.jpg") no-repeat center center
      fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 950px;
  padding: 30px 40px;
  width: 80%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const CTALogo = styled.img`
  width: 100%;
  height: 100%;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  padding: 17px 0px;
  margin-top: 20px;
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 250ms;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 13px;
  margin-top: 20px;
  text-align: center;
  letter-spacing: 2px;
`;

const CTALogoTwo = styled.img`
  margin-top: 20px;
  width: 80%;
`;

export default Login;
