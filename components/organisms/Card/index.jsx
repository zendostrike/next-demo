import Link from "next/link";
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  FooterLeft,
  FooterRight,
  HR
} from "./styles";

export default ({ item }) => (
  <CardContainer>
    <Link href="/packages">
      <CardHeader backgroundImage={item.image} />
    </Link>
    <CardBody>
      <CardTitle>{item.title}</CardTitle>
      <CardSubtitle>{item.subtitle}</CardSubtitle>
    </CardBody>
    <HR />
    <CardFooter>
      <FooterLeft>
        VARADERO <br />
        <span style={{ color: "#1fb8f6" }}>7 NOCHES</span>
      </FooterLeft>
      <FooterRight>
        DESDE <br />{" "}
        <span style={{ color: "#1fb8f6", fontWeight: 600 }}>US$ 447</span> ó
        S/1,901
      </FooterRight>
    </CardFooter>
  </CardContainer>
);
