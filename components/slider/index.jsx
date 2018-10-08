import { PureComponent } from 'react'
import { SliderContainer } from './styles'
import Slide from './Slide'
import RightButton from './RightButton'
import LeftButton from './LeftButton'

const images = ['/static/images/slide_1.jpg', '/static/images/slide_2.png']
export default class Slider extends PureComponent {
  state = {
    slides: images,
    currentIndex: 0,
    autoplay: true,
    duration: 5000
  }

  interval = null

  componentDidMount () {
    this.startInterval()
  }

  goToNextSlide = () => {
    this.resetInterval()
    const { slides, currentIndex } = this.state
    this.setState(prevState => ({
      currentIndex: currentIndex === slides.length - 1
        ? 0
        : prevState.currentIndex + 1
    }))
  }

  goToPrevSlide = () => {
    this.resetInterval()
    const { slides, currentIndex } = this.state
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
    const { slides, currentIndex } = this.state
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
