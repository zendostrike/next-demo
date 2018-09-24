import { CardContainer, CardHeader, CardBody, CardFooter } from './styles'

export default props => (
  <CardContainer>
    <CardHeader backgroundImage={'/static/images/slide_1.jpg'} disc={props.disc}>      
    </CardHeader>
    <CardBody>
      Fiesta de solteros en Varadero
    </CardBody>
    <CardFooter>
      VARADERO 7 NOCHES
    </CardFooter>
  </CardContainer>
)
