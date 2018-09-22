import Head from 'next/head'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const Frame = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
`

const Main = styled.div`
  color: #f3f3f4;
  grid-area: main;
`

export default ({ children, title = 'This is the default title' }) => (
  <Frame>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Frame>
)
