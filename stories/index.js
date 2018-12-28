import React from "react";
import { storiesOf } from "@storybook/react";
import backgrounds from "@storybook/addon-backgrounds";

import { Card } from "../components/organisms";
import { CalendarPage } from "../components/atoms";

import "./styles.css";
import imageFile from "../static/images/slide_1.jpg";

const bg = backgrounds([
  { name: "Light background", value: "#fff", default: true },
  { name: "Dark background", value: "#181818", default: true }
]);

const item = {
  title: "Fiesta de solteros en Varadero",
  subtitle: "Meliá Solo Servicios",
  image: imageFile
};

storiesOf("Card", module)
  .addDecorator(bg)
  .add("with text", () => <Card item={item} />);

storiesOf("CalendarPage", module)
  .addDecorator(bg)
  .add("with text", () => <CalendarPage />);
