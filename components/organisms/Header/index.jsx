import Link from "next/link";
import { Header, Nav, Left, Right, A } from "./styles";

export default ({ logo }) => (
  <Header>
    <Nav>
      <a href="/">
        <Left>
          <img
            src={logo}
            height="50"
            alt="mundipack_logo"
            style={{ cursor: "pointer" }}
          />
        </Left>
      </a>
      <Right>
        <Link href="/">
          <A>Idioma</A>
        </Link>
        <Link href="/signup">
          <A>Login</A>
        </Link>
        <Link href="/signin">
          <A>Club de viajes</A>
        </Link>
      </Right>
    </Nav>
  </Header>
);
