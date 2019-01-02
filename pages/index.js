import DefaultTemplate from "../components/templates/default";
import Subtitle from "../components/Subtitle";
import Slider from "../components/slider";
import Grid from "../components/Grid";
import { Card, SearchBar } from "../components/organisms";
import { Section } from "../components/styles";
import { Tabs } from "../components/molecules";
import { TabItem } from "../components/atoms";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";

const images = ["/static/images/slide_1.jpg", "/static/images/slide_2.png"];

const item = {
  title: "Fiesta de solteros en Varadero",
  subtitle: "Meliá Solo Servicios",
  image: "/static/images/slide_1.jpg"
};

export default () => (
  <DefaultTemplate>
    <Slider slides={images} />
    <Section marginTop="-25px" color="#00ca82">
      <Subtitle text={"Promociones"} />
      <Grid>
        <Card item={item} />
        <Card item={item} />
        <Card item={item} />
        <Card item={item} />
      </Grid>
    </Section>

    <Section background="#00b0ea" dark>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tabs dark>
          <TabItem text="Paquetes" />
          <TabItem text="Salidas Confirmadas" />
        </Tabs>
      </div>

      <SearchBar />
    </Section>
    <Section color="#00ca82">
      <Subtitle text={"Salidas confirmadas"} />
      <Grid>
        <Card item={item} />
        <Card item={item} />
        <Card item={item} />
        <Card item={item} />
      </Grid>
    </Section>
  </DefaultTemplate>
);
