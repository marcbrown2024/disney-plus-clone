import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>
          <a href="/">Get all three</a>
        </SignUp>
        <Description>
          <p>
            All of these and more now streaming on Disney+, Hulu, and ESPN+ with
            the Disney Bundle. ***Hulu (With Ads) + Live TV plan only. $49.99/mo
            for 3 mos, then $76.99/mo (or then-current regular monthly price).
            Ends 10/11/23. © 2023 Disney and its related entities. Eligibility
            restrictions and terms apply.
          </p>
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);

  &:before {
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

const Content = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

`;

const LogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  border: none;
  border-radius: 5px;
  background: #0063e5;
  color: #f9f9f9;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 17px 0;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 10px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }

  a {
    text-decoration: none;
  }
`;

const Description = styled.p`
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5
`;

const LogoTwo = styled.img`
  width: 90%;
`;
