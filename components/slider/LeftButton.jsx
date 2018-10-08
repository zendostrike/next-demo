import { LeftButton, ButtonImage } from './styles'

const image = '/static/images/arrow-left.svg'

export default ({ onClick }) => {
  return (
    <LeftButton onClick={onClick}>
      <ButtonImage src={image} />
    </LeftButton>
  )
}
