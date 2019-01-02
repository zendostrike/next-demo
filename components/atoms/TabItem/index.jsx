import TabItem from "./styles";

const TabItemComponent = ({ text, isActive, onClick, isDark }) => (
  <TabItem onClick={onClick} isActive={isActive} isDark={isDark}>
    {text}
  </TabItem>
);

export default TabItemComponent;
