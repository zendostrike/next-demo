import { SliderContainer, SlideContent, PriceTag } from '../styles'
import Title from './Title'
import Subtitle from './Subtitle'

export default props => (
  <SliderContainer backgroundImage={props.images[0]}>
    <SlideContent>
      <Title text='Cancún' />
      <Subtitle text='Vía Avianca' />
      <div>
        <span>Desde:</span>
      </div>
      <PriceTag>US$989 o S/3363</PriceTag>
    </SlideContent>
  </SliderContainer>
)
