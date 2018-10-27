import Select from "./styles";

export default ({ selectedOption, handleChange, placeholder, options }) => (
  <Select
    value={selectedOption}
    onChange={handleChange}
    options={options}
    placeholder={placeholder}
    theme={theme => ({
      ...theme,
      borderRadius: 0,
      border: "1px solid red",
      colors: {
        ...theme.colors,
        primary: "#00b0ea"
      },
      spacing: {
        baseUnit: 8
      }
    })}
  />
);
