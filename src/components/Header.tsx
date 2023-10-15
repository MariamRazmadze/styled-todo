import styled from "styled-components";
import Blueberry from "../assets/blueberry.jpg";
import Logo from "../assets/blueberry.svg";

export function Header() {
  return (
    <>
      <MainHeader>
        <Title>Blueberry Todo</Title>
        <img src={Logo} style={{ width: "40px" }} alt="blueberry-icon" />
      </MainHeader>
      <ImageWrapper>
        <Image src={Blueberry} alt="blueberry" />
      </ImageWrapper>
    </>
  );
}

const Image = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-2rem) translateX(-1rem);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`;

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 3rem;
  color: #cbcbe3;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const Title = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
