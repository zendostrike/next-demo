import React from "react";
import { storiesOf } from "@storybook/react";
import backgrounds from "@storybook/addon-backgrounds";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "../pages/react_dates_overrides.css";

import { Card } from "../components/organisms";
import { CalendarPage, Button, TabItem } from "../components/atoms";

import "./styles.css";
import imageFile from "../static/images/slide_1.jpg";
import ListItem from "../components/molecules/ListItem";
import SearchBar from "../components/organisms/SearchBar";
import Tabs from "../components/molecules/Tabs";

const bg = backgrounds([
  { name: "Light background", value: "#fff", default: true },
  { name: "Dark background", value: "#181818", default: true }
]);

const item = {
  id: 1,
  title: "Fiesta de solteros en Varadero",
  subtitle: "Meliá Solo Servicios",
  image: imageFile,
  packageName: "Bariloche Clásico - Solo Servicios",
  days: "4 Días / 3 Noches",
  arrivalCity: "Bariloche"
};

/** Atoms */
storiesOf("Button", module)
  .addDecorator(bg)
  .add("with text", () => <Button text={"Submit"} />);

storiesOf("CalendarPage", module)
  .addDecorator(bg)
  .add("with text", () => <CalendarPage />);

/** Molecules */
storiesOf("ListItem", module)
  .addDecorator(bg)
  .add("with text", () => <ListItem item={item} />);

storiesOf("Tabs", module)
  .addDecorator(bg)
  .add("with text", () => (
    <Tabs>
      <TabItem text="Todos" />
      <TabItem text="Paquetes" />
      <TabItem text="Salidas Confirmadas" />
    </Tabs>
  ));

/** Organism */
storiesOf("Card", module)
  .addDecorator(bg)
  .add("with text", () => <Card item={item} />);

storiesOf("SearchBar", module)
  .addDecorator(bg)
  .add("with text", () => <SearchBar />);
