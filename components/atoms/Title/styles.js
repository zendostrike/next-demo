import styled from "styled-components";

export default styled.h1`
  margin: 0;
  font-size: ${props => props.fontSize}px;
  text-align: left;
  font-weight: ${props => props.fontWeight || 600};
  color: ${props => props.color};
`;
