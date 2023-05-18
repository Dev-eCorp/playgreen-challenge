import styled from "styled-components";

const StyledTitleImageContainer = styled.div`
  position: relative;
  padding-top: 448px;
  color: #fefefe;
  font-size: 34px;

  @media (max-height: 760px) {
    padding-top: 428px;
  }

  @media (max-height: 720px) {
    padding-top: 408px;
  }

  @media (max-height: 680px) {
    padding-top: 368px;
  }

  @media (max-height: 640px) {
    padding-top: 328px;
  }

  @media (max-height: 580px) {
    padding-top: 288px;
  }

  @media (max-height: 540px) {
    padding-top: 248px;
  }
`;

export default StyledTitleImageContainer;
