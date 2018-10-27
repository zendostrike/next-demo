import { Select, DatePicker } from "./atoms";
import Button from "./Button";
import { SearchBarContainer } from "./styles";

const cityOptions = [
  { value: "1", label: "Madrid" },
  { value: "2", label: "Buenos Aires" },
  { value: "3", label: "Lima" }
];

const dayOptions = [
  { value: "1", label: "1 día" },
  { value: "2", label: "2 días" },
  { value: "3", label: "3 días" }
];

export default props => (
  <SearchBarContainer>
    <Select placeholder="Buscar destino" options={cityOptions} />
    <DatePicker placeholder="Fecha" />
    <Select placeholder="Días" options={dayOptions} />
    <Button />
  </SearchBarContainer>
);
