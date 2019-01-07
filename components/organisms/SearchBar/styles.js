import styled from "styled-components";

const SearchBarContainer = styled.div`
  margin: 1em auto 50px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 2fr;
  box-shadow: 0 0.2em 2em -0.5em grey;
  max-width: 1000px;
  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
    >div:first-child{
      grid-column: 1/3;
    }
    >button:last-child{
      grid-column: 1/3;
    }
  }
`;

export { SearchBarContainer };
