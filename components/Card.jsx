import {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  FooterLeft,
  FooterRight
} from './styles'

export default props => (
  <CardContainer>
    <CardHeader
      backgroundImage={'/static/images/slide_1.jpg'}
      disc={props.disc}
    />
    <CardBody>
      <CardTitle>Fiesta de solteros en Varadero</CardTitle>
      <CardSubtitle>Meliá Solo Servicios</CardSubtitle>
    </CardBody>
    <CardFooter>
      <FooterLeft>
        VARADERO <br /><span style={{ color: '#1fb8f6' }}>7 NOCHES</span>
      </FooterLeft>
      <FooterRight>DESDE US$ 447 ó S/1,901</FooterRight>
    </CardFooter>
  </CardContainer>
)
