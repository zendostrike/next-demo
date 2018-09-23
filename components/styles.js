import styled from 'styled-components'

export const Title = styled.h1`
  color: #00b0ea;
`

export const Subtitle = styled.h2`
  color: ${props => props.color || '#fff'};
`

export const HeaderLink = styled.a`
  color: #00ca82;
`

export const SliderContainer = styled.div`
  padding: 0;
`

export const Section = styled.div`
  text-align: center;
  color: ${props => (props.dark ? '#fff' : '#00ca82')};
  background: ${props => props.background || '#fff'};
  position: relative;
  padding: ${props => (props.dark ? '1em 1em 9em' : '1em 1em 50px')};
  margin-top: ${props => (props.dark ? '100px' : '0px')};
  ::before {
    content: ' ';
    background: ${props => (props.dark ? 'linear-gradient(to left bottom, transparent 49.5%, #00b0ea 50%);' : 'linear-gradient(to left bottom, transparent 49.5%, #fff 50%);')};
    position: absolute;
    width: 100%;
    height: 100px;
    top: ${props => (props.dark ? '-99px' : '-99px')};
    left: 0;
  }
  ::after {
    content: ' ';
    background: ${props => (props.dark ? 'linear-gradient(to left bottom, #00b0ea 49.5%, transparent 50%);' : 'linear-gradient(183deg, #fff 49.5%, #F3F3F4 50%);')};
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: -100px;
    left: 0;
  }
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
  max-width: 350px;
  color: #a0a0a1;
  font-weight: bold;
  cursor: pointer;
  background: #fff;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  -moz-box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
  box-shadow: 0px 2px 3px 0px rgba(102, 102, 102, 0.61);
`

export const CardHeader = styled.div`

`

export const CardBody = styled.div`

`
export const CardFooter = styled.div`

`

export const GridContainer = styled.div`
  background: red;
  display: grid;
  grid-template-columns: 300px 300px 300px;
`

export const GridItem = styled.div`

`
