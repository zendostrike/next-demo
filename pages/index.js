import Layout from '../components/layout'
import Subtitle from '../components/Subtitle'
import SearchBar from '../components/SearchBar'
import Slider from '../components/slider'
import Grid from '../components/Grid'
import Card from '../components/Card'
import { Section } from '../components/styles'

const images = ['/static/images/slide_1.jpg', '/static/images/slide_2.jpg']

export default () => (
  <Layout>
    <Slider images={images} />
    <Section background='#00b0ea' marginTop='-25px' dark>
      <Subtitle text={'Promociones'} />
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Section>
    <Section>
      Paquetes | Salidas Confirmadas
      <SearchBar />
    </Section>
    <Section background='#00b0ea' dark>
      <Subtitle text={'Salidas confirmadas'} />
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Section>
  </Layout>
)
