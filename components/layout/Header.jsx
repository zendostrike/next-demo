import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  padding: 20px 0;
  color: #00b0ea;
  grid-area: header;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

const Nav = styled.nav`
  display: grid;
  grid-template-areas: "left right";
  padding: 0 1em;
`

const Left = styled.div`
  grid-area: left;
`

const Right = styled.div`
  grid-area: right;
  text-align: right;
  padding-top: 13px;
`

const A = styled.a`
  color: #00b0ea;
  padding: 10px;
  cursor: pointer;
`

export default props => (
  <Header>
    <Nav>
      <Left>
        <img src='/static/images/logo.png' height='45' />
      </Left>
      <Right>
        <Link href='/'>
          <A>Idioma</A>
        </Link>
        <Link href='/signup'>
          <A>Registro</A>
        </Link>
        <Link href='/signin'>
          <A>Login</A>
        </Link>
      </Right>
    </Nav>
  </Header>
)
