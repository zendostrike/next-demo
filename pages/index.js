import Layout from '../components/layout'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import SearchBar from '../components/SearchBar'
import Slider from '../components/slider'
import { Section } from '../components/styles'

const images = ['/static/images/slide_1.jpg']

export default () => (
  <Layout>
    <Slider images={images} />
    <Section>
      Paquetes | Salidas Confirmadas
      <SearchBar />
    </Section>
    <Section background='#00b0ea' dark>
      Paquetes | Salidas Confirmadas
      <SearchBar />
    </Section>
    <Title text={'Mundipack'} />
    <Subtitle text={'Bienvenidos'} />
  </Layout>
)
