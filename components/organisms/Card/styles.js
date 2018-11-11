import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 250px;
  font-size: 0.85em;
  color: #a0a0a1;
  cursor: pointer;
  background: #fff;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  -moz-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  border-radius: 3px;
`;

const CardHeader = styled.div`
  background-image: url('${props => props.backgroundImage}');
  background-position: center top;
  background-size: cover;
  height: 14em;
  border-radius: 3px 3px 0 0;
  position: relative;
`;

const CardBody = styled.div`
  padding: 10px;
  text-align: left;
`;
const CardFooter = styled.div`
  display: grid;
  grid-template-areas: "left right";
  padding: 10px;
`;

const FooterLeft = styled.div`
  grid-area: left;
`;

const FooterRight = styled.div`
  grid-area: right;
`;

const CardTitle = styled.p`
  color: #1f1f1f;
  margin: 0;
`;

const CardSubtitle = styled.span`
  margin: 0;
`;

export {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  FooterLeft,
  FooterRight
};
