import Layout from "../components/layout";
import Subtitle from "../components/Subtitle";
import SearchBar from "../components/SearchBar";
import Slider from "../components/slider";
import Grid from "../components/Grid";
import Card from "../components/Card";
import { Section } from "../components/styles";
import { DatePicker } from "../components/atoms";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const images = ["/static/images/slide_1.jpg", "/static/images/slide_2.png"];

export default () => (
  <Layout>
    <Slider slides={images} />
    <Section marginTop="-25px" color="#00ca82">
      <Subtitle text={"Promociones"} />
      <Grid>
        <Card disc={"10"} />
        <Card disc={"20"} />
        <Card disc={"30"} />
        <Card disc={"20"} />
      </Grid>
    </Section>

    <Section background="#00b0ea" dark>
      Paquetes | Salidas Confirmadas
      <SearchBar />
    </Section>
    <Section color="#00ca82">
      <Subtitle text={"Salidas confirmadas"} />
      <DatePicker placeholder="Fecha" />

      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Section>
  </Layout>
);
