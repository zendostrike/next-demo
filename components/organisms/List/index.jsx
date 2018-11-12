import Link from "next/link";
import Item from "./Item";
import { ListContainer } from "./styles";

export default ({ items }) => (
  <ListContainer>
    {items.map(item => (
      <Item item={item} key={item.id} />
    ))}
  </ListContainer>
);
