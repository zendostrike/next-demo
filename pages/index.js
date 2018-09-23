import Layout from '../components/layout'
import Subtitle from '../components/Subtitle'
import SearchBar from '../components/SearchBar'
import Slider from '../components/slider'
import Grid from '../components/Grid'
import Card from '../components/Card'
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
    <Section background='#00b0ea' dark>
      <Subtitle text={'Promociones'} />
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Section>
  </Layout>
)
