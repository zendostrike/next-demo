import styled from 'styled-components'

export const SliderContainer = styled.div`
  padding: 0;
  height: 700px;
  position: relative;
`

export const SlideContainer = styled.div`
  background-image: url('${props => props.backgroundImage}');
  background-position: center center;
  background-size: cover;
  height: 100%;
`

export const SlideContent = styled.div`
  position: absolute;
  top: 2em;
  right: 8%;
  & span{
    margin: 1em 0 .5em;
    display: block;
    color: #00b0ea;
    font-size: 1.5em;
    position: relative;
    ::before{
      content: ' ';
      position: absolute;
      width: 100%;
      height: 85px;
      background: #ffffff80;
      top: 1.5em;
      left: -.5em;
      z-index: 0;
      transform: rotate(-8deg);
    }
  }
`

export const SliderTitle = styled.h1`
  font-size: 6em;
  text-shadow: -1px -1px 5px rgba(51,51,51,0.89);
  margin: 0px;
`

export const SliderSubtitle = styled.h2`
  font-size: 3em;
  text-shadow: -1px -1px 5px rgba(51,51,51,0.89);
  margin: 0px;
`

export const PriceTag = styled.a`
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  border-style: none;
  background: #00b0ea;
  font-size: 3em;
  padding: 15px;
  display: block;    
  position: relative;
`

export const LeftButton = styled.div`
  position: absolute;
  top: 300px;
  left: 20px;
  cursor: pointer;
`

export const RightButton = styled.div`
  position: absolute;
  top: 300px;
  right: 20px;
  cursor: pointer;
`

export const ButtonImage = styled.img`
  width: 40px;
`
