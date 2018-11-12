import DefaultTemplate from "../components/templates/default";
import { Section, Section2 } from "../components/styles";
import SearchBar from "../components/SearchBar";
import { List } from "../components/organisms";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";

const travels = [
  {
    id: 1,
    title: "Fiesta de solteros en Varadero",
    subtitle: "Meliá Solo Servicios",
    image: "/static/images/slide_1.jpg",
    arrivalCity: "Bariloche",
    packageName: "Bariloche Clásico - Solo Servicios",
    days: "4 Días / 3 Noches"
  },
  {
    id: 2,
    title: "Fiesta de solteros en Varadero",
    subtitle: "Meliá Solo Servicios",
    image: "/static/images/slide_1.jpg",
    arrivalCity: "Bariloche",
    packageName: "Bariloche Clásico - Solo Servicios",
    days: "4 Días / 3 Noches"
  },
  {
    id: 3,
    title: "Fiesta de solteros en Varadero",
    subtitle: "Meliá Solo Servicios",
    image: "/static/images/slide_1.jpg",
    arrivalCity: "Bariloche",
    packageName: "Bariloche Clásico - Solo Servicios",
    days: "4 Días / 3 Noches"
  },
  {
    id: 4,
    title: "Fiesta de solteros en Varadero",
    subtitle: "Meliá Solo Servicios",
    image: "/static/images/slide_1.jpg",
    arrivalCity: "Bariloche",
    packageName: "Bariloche Clásico - Solo Servicios",
    days: "4 Días / 3 Noches"
  }
];

export default () => (
  <DefaultTemplate title="About us">
    <Section2>
      <SearchBar />
    </Section2>
    <Section2>
      <List items={travels} />
    </Section2>
  </DefaultTemplate>
);
