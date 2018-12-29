// import Link from "next/link";
import {
  ItemContainer,
  Avatar,
  Info,
  Stock,
  DepartureDate,
  ArrivalDate,
  PriceBefore,
  PriceNow,
  Actions,
  HR,
  Small,
  P,
  Days
} from "./styles";
import { Title, Subtitle, Button, CalendarPage } from "../../atoms";

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
      <Subtitle text="Cupos" fontSize={16} />
      <p
        style={{
          fontSize: "42px",
          textAlign: "center",
          fontWeight: 600,
          margin: 0,
          padding: "24px"
        }}
      >
        5
      </p>
    </Stock>
    <DepartureDate>
      <Subtitle text="Salida" fontSize={16} />
      <CalendarPage />
    </DepartureDate>
    <ArrivalDate>
      <Subtitle text="Retorno" fontSize={16} />
      <CalendarPage />
    </ArrivalDate>
    <PriceBefore>
      <div style={{ margin: 0, padding: "40px 0px" }}>
        <Subtitle text="ANTES" color="#d0d1d3" fontSize="10" />
        <p
          style={{
            margin: 0,
            fontSize: "28px",
            textAlign: "center",
            fontWeight: 600,
            color: "#d0d1d3",
            textDecoration: "line-through"
          }}
        >
          $540.00
        </p>
      </div>
    </PriceBefore>
    <PriceNow>
      <div style={{ margin: 0, padding: "35px 0px" }}>
        <Subtitle text="AHORA" color="#58c281" fontSize="16" />
        <p
          style={{
            margin: 0,
            fontSize: "34px",
            textAlign: "center",
            fontWeight: 600,
            color: "#58c281"
          }}
        >
          $499.99
        </p>
      </div>
    </PriceNow>
    <Actions>
      <div style={{ margin: "auto", padding: "50px 0px" }}>
        <Button text="VER DETALLE" />
      </div>
    </Actions>
  </ItemContainer>
);
