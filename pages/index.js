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
    <Section margin-top='100px'>
      Paquetes | Salidas Confirmadas
      <SearchBar />
    </Section>
    <Section background='#00b0ea' dark>
      Promociones 
      <SearchBar />
    </Section>
    <Section >
      Paquetes | Salidas Confirmadas
      <SearchBar />
    </Section>
  </Layout>
)
