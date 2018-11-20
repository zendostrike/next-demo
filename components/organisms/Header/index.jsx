import Link from 'next/link'
import { Header, Nav, Left, Right, A } from './styles'

export default () => (
  <Header>
    <Nav>
      <Link href='/'>
        <Left>
          <img src='/static/images/logo.png' height='50' alt='mundipack_logo' />
        </Left>
      </Link>
      <Right>
        <Link href='/'>
          <A>Idioma</A>
        </Link>
        <Link href='/signup'>
          <A>Login</A>
        </Link>
        <Link href='/signin'>
          <A>Club de viajes</A>
        </Link>
      </Right>
    </Nav>
  </Header>
)
