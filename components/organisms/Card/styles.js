import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 280px;
  font-size: 0.85em;
  color: #a0a0a1;
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
  height: 15em;
  border-radius: 3px 3px 0 0;
  position: relative;
  cursor: pointer;
`;

const CardBody = styled.div`
  padding: 10px 10px 0px 10px;
  text-align: left;
`;
const CardFooter = styled.div`
  display: grid;
  grid-template-areas: "left right";
  padding: 0px 10px 10px 10px;
  text-align: left;
`;

const FooterLeft = styled.div`
  grid-area: left;
`;

const FooterRight = styled.div`
  grid-area: right;
  text-align: left;
`;

const CardTitle = styled.p`
  color: #1f1f1f;
  margin: 0;
`;

const CardSubtitle = styled.span`
  margin: 0;
`;

const HR = styled.hr`
  width: 91%;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  FooterLeft,
  FooterRight,
  HR
};
