import Select from "./styles";

const customStyles = {
  control: () => ({
    // none of react-select's styles are passed to <Control />
    borderStyle: "none",
    // boxShadow: "0px 2px 3px 0px rgba(102, 102, 102, 0.61)",
    borderBottom: "1px solid #00b0ea",
    display: "flex",
    background: "#fff"
  }),
  input: () => ({
    color: "#00b0ea",
    fontSize: "16px"
  }),
  placeholder: () => ({
    color: "#00b0ea",
    fontSize: "16px"
  }),
  singleValue: () => ({
    color: "#00b0ea",
    fontSize: "16px"
  }),
  dropdownIndicator: () => ({
    padding: "14px 20px",
    color: "#00b0ea"
  }),
  indicatorSeparator: () => ({
    color: "#00b0ea"
  })
};

export default ({ selectedOption, handleChange, placeholder, options }) => (
  <Select
    value={selectedOption}
    onChange={handleChange}
    options={options}
    placeholder={placeholder}
    styles={customStyles}
    theme={theme => ({
      ...theme,
      borderRadius: 0,
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
