import Title from "./styles";

const TitleComponent = ({ color, text, fontSize, fontWeight }) => (
  <Title color={color} fontSize={fontSize} fontWeight={fontWeight}>
    {text}
  </Title>
);

TitleComponent.defaultProps = {
  color: "#00b0ea",
  fontSize: "24"
};

export default TitleComponent;
