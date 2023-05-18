import styled from "styled-components";

const StyledLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 122.02%;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  margin-top: 8px;
  margin-bottom: 18px;
`;

export default StyledLink;
