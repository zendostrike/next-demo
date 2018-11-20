// import Link from "next/link";
import {
  ItemContainer,
  Avatar,
  Info,
  Stock,
  Dates,
  Prices,
  Actions,
  HR,
  Small,
  P,
  Days
} from "./styles";
import { Title, Subtitle, Button, CalendarPage } from "../../../atoms";

export default ({ item }) => (
  <ItemContainer>
    <Avatar backgroundImage={item.image} />
    <Info>
      <Title text={item.arrivalCity} />
      <div style={{ marginTop: "25px", width: "80%" }}>
        <Small>{"Paquete"}</Small>
        <HR />
        <P>{item.packageName}</P>
        <Days>{item.days}</Days>
      </div>
    </Info>
    <Stock>
      <Subtitle text="Cupos" />
      <p style={{ fontSize: "42px", textAlign: "center", fontWeight: 600 }}>
        5
      </p>
    </Stock>
    <Dates>
      <div style={{ padding: "0px 25px 0px 25px" }}>
        <Subtitle text="Salida" />
        <CalendarPage />
      </div>
      <div style={{ padding: "0px 25px 0px 25px" }}>
        <Subtitle text="Retorno" />
        <CalendarPage />
      </div>
    </Dates>
    <Prices>
      <div style={{ margin: 0, padding: "40px 0px" }}>
        <Subtitle text="ANTES" color="#d0d1d3" fontSize="16" />
        <p
          style={{
            margin: 0,
            fontSize: "34px",
            textAlign: "center",
            fontWeight: 600,
            color: "#d0d1d3",
            textDecoration: "line-through"
          }}
        >
          $540.00
        </p>
      </div>
      <div style={{ margin: 0, padding: "35px 0px" }}>
        <Subtitle text="AHORA" color="#58c281" fontSize="20" />
        <p
          style={{
            margin: 0,
            fontSize: "38px",
            textAlign: "center",
            fontWeight: 600,
            color: "#58c281"
          }}
        >
          $499.99
        </p>
      </div>
    </Prices>
    <Actions>
      <div style={{ margin: "auto", padding: "50px 0px" }}>
        <Button text="VER DETALLE" />
      </div>
    </Actions>
  </ItemContainer>
);
