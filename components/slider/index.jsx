import { SliderContainer, SlideContent, PriceTag } from '../styles'
import Title from './Title'
import Subtitle from './Subtitle'

export default props => (
  <SliderContainer>
    <SlideContent>
      <Title text='Cancún' />
      <Subtitle text='Vía Avianca' />
      <div>
        <span>Desde:</span>
      </div>
      <PriceTag>US$989 o S/3363</PriceTag>
    </SlideContent>
    <img src={props.images[0]} width='100%' />
  </SliderContainer>
)
