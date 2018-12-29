import ListItem from "../../molecules/ListItem";
import { ListContainer } from "./styles";

export default ({ items }) => (
  <ListContainer>
    {items.map(item => (
      <ListItem item={item} key={item.id} />
    ))}
  </ListContainer>
);
