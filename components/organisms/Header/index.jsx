import Link from "next/link";
import { Header, Nav, Left, Right, A } from "./styles";

export default () => (
  <Header>
    <Nav>
      <Left>
        <img src="/static/images/logo.png" height="50" alt="mundipack_logo" />
      </Left>
      <Right>
        <Link href="/">
          <A>Idioma</A>
        </Link>
        <Link href="/signup">
          <A>Registro</A>
        </Link>
        <Link href="/signin">
          <A>Login</A>
        </Link>
      </Right>
    </Nav>
  </Header>
);
