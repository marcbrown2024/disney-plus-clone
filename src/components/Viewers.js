import React, { useState } from "react";
import styled from "styled-components";

function Viewers() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  return (
    <Container>
      <Wrap
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        isHovered={isHovered1}
      >
        <video autoPlay muted loop>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        isHovered={isHovered2}
      >
        <video autoPlay muted loop>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        isHovered={isHovered3}
      >
        <video autoPlay muted loop>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
        isHovered={isHovered4}
      >
        <video autoPlay muted loop>
          <source src="/videos/starwars.mp4" type="video/mp4" />
        </video>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap
        onMouseEnter={() => setIsHovered5(true)}
        onMouseLeave={() => setIsHovered5(false)}
        isHovered={isHovered5}
      >
        <video autoPlay muted loop>
          <source src="/videos/national.mp4" type="video/mp4" />
        </video>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  justify-items: center;
  align-items: center;
  padding: 30px 0px 26px;
  gap: 25px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
    visibility: ${(props) => (props.isHovered ? "visible" : "hidden")};
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
