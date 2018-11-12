import H2 from "./styles";

const Subtitle = ({ color, text, fontSize }) => (
  <H2 color={color} fontSize={fontSize}>
    {text}
  </H2>
);

Subtitle.defaultProps = {
  color: "#999b9c",
  fontSize: "24"
};

export default Subtitle;
