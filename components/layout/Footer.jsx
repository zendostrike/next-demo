import styled from 'styled-components'

const Footer = styled.footer`
  width: 100%;
  background: #606062;
  color: #e5e6e7;
  grid-area: footer;
  bottom: 0;
`
const ContactUs = styled.footer`
  margin: 0px;
  padding: 75px;
`

const Credits = styled.footer`
  background: #4c4c4e;
  padding: 75px;
`

export default () => (
  <Footer>
    <ContactUs>{'Contáctenos'}</ContactUs>
    <Credits>{'2018 Mundipack | Todos los derechos reservados.'}</Credits>
  </Footer>
)
