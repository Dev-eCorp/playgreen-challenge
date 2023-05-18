import styled from "styled-components";

const HomePageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 520px;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  overflow: hidden;

  @media (max-height: 760px) {
    height: 500px;
  }

  @media (max-height: 720px) {
    height: 480px;
  }

  @media (max-height: 680px) {
    height: 440px;
  }

  @media (max-height: 640px) {
    height: 400px;
  }

  @media (max-height: 580px) {
    height: 360px;
  }

  @media (max-height: 540px) {
    height: 320px;
  }
`;

export default HomePageContainer;
