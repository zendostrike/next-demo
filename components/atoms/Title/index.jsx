import Title from './styles'

const TitleComponent = ({ color, text, fontSize }) => (
  <Title color={color} fontSize={fontSize}>
    {text}
  </Title>
)

TitleComponent.defaultProps = {
  color: '#00b0ea',
  fontSize: '24'
}

export default TitleComponent
