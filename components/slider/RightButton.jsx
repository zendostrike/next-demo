import { RightButton, ButtonImage } from './styles'

const image = '/static/images/arrow-right.svg'

export default ({ onClick }) => {
  return (
    <RightButton onClick={onClick}>
      <ButtonImage src={image} />
    </RightButton>
  )
}
