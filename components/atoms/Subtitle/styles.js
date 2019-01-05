import styled from "styled-components";

export default styled.h2`
  margin: 0;
  font-size: ${props => props.fontSize}px;
  text-align: ${props => props.textAlign || "center"};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight || 600};
`;
