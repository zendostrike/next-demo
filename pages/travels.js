import DefaultTemplate from "../components/templates/default";
import { Section } from "../components/styles";
import SearchBar from "../components/SearchBar";
import "./react_dates_overrides.css";

export default () => (
  <DefaultTemplate title="About us">
    <Section>
      <SearchBar />
    </Section>
  </DefaultTemplate>
);
