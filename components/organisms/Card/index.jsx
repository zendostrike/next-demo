import {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  FooterLeft,
  FooterRight
} from "./styles";

export default ({ item }) => (
  <CardContainer>
    <CardHeader backgroundImage={item.image} />
    <CardBody>
      <CardTitle>{item.title}</CardTitle>
      <CardSubtitle>{item.subtitle}</CardSubtitle>
    </CardBody>
    <CardFooter>
      <FooterLeft>
        VARADERO <br />
        <span style={{ color: "#1fb8f6" }}>7 NOCHES</span>
      </FooterLeft>
      <FooterRight>DESDE US$ 447 ó S/1,901</FooterRight>
    </CardFooter>
  </CardContainer>
);
