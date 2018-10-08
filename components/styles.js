import styled from 'styled-components'

export const Title = styled.h1`
  color: #00b0ea;
`

export const Subtitle = styled.h2`
  text-align: left;
  max-width: 1200px;
  margin: 1em auto 2em;
  @media (max-width: 600px) {
    text-align: center;
  }
`

export const HeaderLink = styled.a`
  color: #00ca82;
`

export const SliderContainer = styled.div`
  padding: 0;
  height: 700px;
  background-image: url('${props => props.backgroundImage}');
  background-position: center center;
  background-size: cover;
  position: relative;
`

export const SlideContent = styled.div`
  position: absolute;
  top: 2em;
  right: 5%;
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

export const Section = styled.div`

  text-align: center;
  color: ${props => (props.dark ? '#fff' : '#00ca82')};
  background: ${props => props.background || '#fff'};
  position: relative;
  padding: 0 1em 2em;
  margin-top: ${props => props.marginTop || '100px'};
  ::before {
    content: ' ';
    background: ${props => (props.dark ? 'linear-gradient(to left bottom, transparent 49.5%, #00b0ea 50%);' : 'linear-gradient(to left bottom, transparent 49.5%, #fff 50%);')};
    position: absolute;
    width: 100%;
    height: 100px;
    top: -99px;
    left: 0;
  }
  ::after {
    content: ' ';
    background: ${props => (props.dark ? 'linear-gradient(to left bottom, #00b0ea 49.5%, transparent 50%);' : 'linear-gradient(182deg, #fff 49.5%, #F3F3F4 50%);')};
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: -99px;
    left: 0;
  }
  & h2{
    color: ${props => (props.dark ? '#fff' : '#00ca82')};
  }
`
export const SearchBarContainer = styled.div`
  padding: 1em 1em 50px;
`

export const Select = styled.select`
  color: #00b0ea;
  border-style: none;
  background: #fff;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  -moz-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
`

export const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  border-style: none;
  background: #00ca82;
  padding: 15px 55px 15px 55px;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  -moz-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
`

export const CardContainer = styled.div`
  max-width: 250px;
  font-size: 0.85em;
  color: #a0a0a1;
  cursor: pointer;
  background: #fff;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  -moz-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  border-radius: 3px;    
`

export const CardHeader = styled.div`
  background-image: url('${props => props.backgroundImage}');
  background-position: center top;
  background-size: cover;
  height: 14em;
  border-radius: 3px 3px 0 0;
  position: relative;  
  ::after {  
    content: "${props => props.disc}%";
    color:#fff;
    text-align: right;
    background: ${props => (props.disc <= 10 ? 'linear-gradient(130deg,transparent 60.5%,#00C97C 61%)' : props.disc <= 20 ? 'linear-gradient(130deg,transparent 60.5%,#F58634 61%)' : 'linear-gradient(130deg,transparent 60.5%,#ED3237 61%)')};
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0px;
    left: 0;
    font-size: 2em;
  }
`

export const CardBody = styled.div`
  padding: 10px;
  text-align: left;
`
export const CardFooter = styled.div`
  display: grid;
  grid-template-areas: "left right";
  padding: 10px;
`

export const FooterLeft = styled.div`
  grid-area: left;
`

export const FooterRight = styled.div`
  grid-area: right;
`

export const CardTitle = styled.p`
  color: #1f1f1f;
  margin: 0;
`

export const CardSubtitle = styled.span`
  margin: 0;
`

export const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 260px);
  justify-content: space-between;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 1179px) {
    grid-template-columns: repeat(3, 260px) ;
  }
  @media (max-width: 889px) {
    grid-template-columns: repeat(2, 260px) ;
    justify-content: space-around;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 260px) ;
  }
`

export const GridItem = styled.div`

`
