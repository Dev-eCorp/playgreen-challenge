import styled from "styled-components";

const StyledContainerHistory = styled.div`
  font-family: "DM Sans";
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 60px;
  padding: 0px 8px;
  margin-bottom: 100px;

  @media (max-width: 340px) {
    padding: 0px 4px;
  }
`;

export default StyledContainerHistory;
