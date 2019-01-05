import H2 from "./styles";

const Subtitle = ({ color, text, fontSize, fontWeight, textAlign }) => (
  <H2
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    textAlign={textAlign}
  >
    {text}
  </H2>
);

Subtitle.defaultProps = {
  color: "#999b9c",
  fontSize: "24"
};

export default Subtitle;
