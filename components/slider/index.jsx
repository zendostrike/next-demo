import { PureComponent } from 'react'
import { SliderContainer } from './styles'
import Slide from './Slide'
import RightButton from './RightButton'
import LeftButton from './LeftButton'

export default class Slider extends PureComponent {
  state = {
    currentIndex: 0,
    duration: 5000
  }

  interval = null

  componentDidMount () {
    this.startInterval()
  }

  componentWillUnmount () {
    clearInterval(this.mnterval)
  }

  goToNextSlide = () => {
    this.resetInterval()
    const { slides } = this.props
    const { currentIndex } = this.state
    this.setState(prevState => ({
      currentIndex: currentIndex === slides.length - 1
        ? 0
        : prevState.currentIndex + 1
    }))
  }

  goToPrevSlide = () => {
    this.resetInterval()
    const { slides } = this.props
    const { currentIndex } = this.state
    this.setState(prevState => ({
      currentIndex: currentIndex === 0
        ? slides.length - 1
        : prevState.currentIndex - 1
    }))
  }

  startInterval = () => {
    this.interval = setInterval(() => {
      this.goToNextSlide()
    }, this.state.duration)
  }

  resetInterval = () => {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.goToNextSlide()
    }, this.state.duration)
  }

  renderSlides = () => {
    const { slides } = this.props
    const { currentIndex } = this.state
    return <Slide image={slides[currentIndex]} />
  }

  render () {
    return (
      <SliderContainer>
        {this.renderSlides()}
        <LeftButton onClick={this.goToPrevSlide} />
        <RightButton onClick={this.goToNextSlide} />
      </SliderContainer>
    )
  }
}
