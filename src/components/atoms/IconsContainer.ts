import styled from "styled-components";

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  padding: 20px 0;
  padding-top: 160px;
  padding-top: 46px;

  @media (max-height: 760px) {
    padding-top: 38px;
  }

  @media (max-height: 720px) {
    padding-top: 34px;
  }

  @media (max-height: 680px) {
    padding-top: 28px;
  }

  @media (max-height: 640px) {
    padding-top: 22px;
  }

  @media (max-height: 580px) {
    padding-top: 18px;
  }

  @media (max-height: 540px) {
    padding-top: 8px;
  }
`;

export default IconsContainer;
