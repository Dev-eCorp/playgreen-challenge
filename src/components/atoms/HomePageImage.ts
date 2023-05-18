import styled from "styled-components";

const HomePageImage = styled.img`
  width: 100vw;
  height: 600px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 34px;
  border-bottom-right-radius: 34px;

  @media (max-height: 620px) {
    height: 400px;
  }

  @media (max-height: 540px) {
    height: 380px;
  }
`;

export default HomePageImage;
