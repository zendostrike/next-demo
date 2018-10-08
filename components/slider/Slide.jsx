import React from 'react'
import { SlideContent, PriceTag, SlideContainer } from './styles'
import Title from './Title'
import Subtitle from './Subtitle'

const Slide = ({ image }) => {
  console.log(image)
  return (
    <SlideContainer backgroundImage={image}>
      <SlideContent>
        <Title text='Cancún' />
        <Subtitle text='Vía Avianca' />
        <div>
          <span>Desde:</span>
        </div>
        <PriceTag>US$989 o S/3363</PriceTag>
      </SlideContent>
    </SlideContainer>
  )
}

export default Slide
