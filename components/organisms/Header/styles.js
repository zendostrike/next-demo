import styled from "styled-components";

const Header = styled.header`
  padding: 20px 0;
  color: #00b0ea;
  grid-area: header;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-areas: "left right";
  padding: 0 1em;
`;

const Left = styled.div`
  grid-area: left;
`;

const Right = styled.div`
  grid-area: right;
  text-align: right;
  padding-top: 13px;
`;

const A = styled.a`
  color: #00b0ea;
  padding: 10px;
  cursor: pointer;
`;

export { Header, Nav, Left, Right, A };
