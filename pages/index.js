import Layout from '../components/layout'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import SearchBar from '../components/SearchBar'
import { Slider, Section } from '../components/styles'

export default () => (
  <Layout>
    <Slider>a</Slider>
    <Section>
      Paquetes | Salidas Confirmadas
      <SearchBar />
    </Section>
    <Title text={'Mundipack'} />
    <Subtitle text={'Bienvenidos'} />
  </Layout>
)
