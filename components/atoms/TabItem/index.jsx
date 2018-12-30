import TabItem from "./styles";

const TabItemComponent = ({ text, isActive, onClick }) => (
  <TabItem onClick={onClick} isActive={isActive}>
    {text}
  </TabItem>
);

export default TabItemComponent;
