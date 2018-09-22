import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  padding: 50px;
  color: #00b0ea;
  grid-area: header;
`

export const HeaderLink = styled.a`
  color: #00b0ea;
  padding: 10px;
  cursor: pointer;
`

export default props => (
  <Header>
    <nav>
      <Link href='/'>
        <HeaderLink>Mundipack</HeaderLink>
      </Link>
      <Link href='/signup'>
        <HeaderLink>Registro</HeaderLink>
      </Link>
      <Link href='/signin'>
        <HeaderLink>Login</HeaderLink>
      </Link>
    </nav>
  </Header>
)
