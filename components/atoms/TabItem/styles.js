import styled from "styled-components";

export default styled.div`
  border-bottom: 6px solid ${props => (props.isActive ? "#00ca82" : "#f1f3f3")};
  color: ${props => (props.isDark ? "#fff" : "#999b9c")};
  font-size: 14px;
  font-weight: 600;
  padding: 10px 40px;
  cursor: pointer;
  text-align: center;
`;
