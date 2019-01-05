import DefaultTemplate from "../../components/templates/default";
import { Section2 } from "../../components/styles";
import { Button, Subtitle, Title } from "../../components/atoms";

const item = {
  id: 1,
  title: "Fiesta de solteros en Varadero",
  slug: "fiesta_varadero",
  subtitle: "Meliá Solo Servicios",
  image: "/static/images/sao-paulo.png",
  arrivalCity: "Varadero",
  packageName: "Varadero Clásico - Solo Servicios",
  days: "4 Días / 3 Noches",
  price: "499.99"
};

export default () => (
  <DefaultTemplate title="About us">
    <Section2>
      <Subtitle text="Detalle" fontSize="18" textAlign="left" />
      {/* <div style={{ maxWidth: "600px", marginBottom: "30px" }}>
        <Tabs>
          <TabItem text="Todos" />
          <TabItem text="Paquetes" />
          <TabItem text="Salidas Confirmadas" />
        </Tabs>
      </div>
      <List items={travels} /> */}
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div
          style={{ borderBottom: "6px solid #f1f3f3", paddingRight: "80px" }}
        >
          <Title text={item.title} fontSize="34" color="#00ca82" />
        </div>
        <div style={{ borderBottom: "6px solid #E6E7E8" }}>
          <p>
            <strong>{item.days}</strong>
          </p>
        </div>
      </div>
      <div style={{ padding: "25px 0px", display: "flex" }}>
        <img src={item.image} />
        <div style={{ marginLeft: "35px", padding: "10px 0px" }}>
          <Subtitle text="Desde" fontSize="20" textAlign="left" />
          <p
            style={{ fontWeight: 600, fontSize: "32px", margin: "12px 0px" }}
          >{`$${item.price}`}</p>
          {/* <Subtitle text="Salida" fontSize="20" textAlign="left" />
          <p>Jue 27 Dic 2018 09:29hs</p>
          <p>Retorno</p>
          <p>Mar 01 Ene 2019 09:29hs</p> */}
          <Button text="RESERVAR" />
        </div>
      </div>

      <Subtitle text="Incluido" textAlign="left" fontSize="20" />
      <div style={{ margin: "12px 0px" }}>
        <p style={{ color: "#999b9c", margin: 0 }}>Boleto Aéreo</p>
        <p style={{ color: "#999b9c", margin: 0 }}>
          Queues $94, DY$15.00, HW$30.75, XT$33.67
        </p>
        <p style={{ color: "#999b9c", margin: 0 }}>
          Traslados aeropuerto / hotel / aeropuerto en regular
        </p>
        <p style={{ color: "#999b9c", margin: 0 }}>{`${
          item.days
        } de alojamiento en hotel seleccionado`}</p>
        <p style={{ color: "#999b9c", margin: 0 }}>Desayunos diaros</p>
      </div>

      {/* <div style={{ display: "flex" }}>
        <div
          style={{
            borderTop: "2px solid #f1f3f3",
            borderBottom: "2px solid #f1f3f3"
          }}
        >
          <Subtitle text="Itinerario de vuelo" textAlign="left" fontSize="20" />
        </div>
        <div
          style={{
            borderTop: "2px solid #f1f3f3",
            borderBottom: "2px solid #f1f3f3"
          }}
        >
          <Subtitle text="Tarifa" textAlign="left" fontSize="20" />
        </div>
      </div> */}

      <Subtitle text="* Restricciones" textAlign="left" fontSize="16" />
      <div style={{ margin: "12px 0px" }}>
        <p style={{ color: "#999b9c", margin: 0, fontSize: "14px" }}>
          NOTA IMPORTANTE
        </p>
        <p style={{ color: "#999b9c", margin: 0, fontSize: "14px" }}>
          * Boleto Aéreo
        </p>
        <p style={{ color: "#999b9c", margin: 0, fontSize: "14px" }}>
          * Queues $94, DY$14.00, HW$30.75, XT$33.67
        </p>
        <p style={{ color: "#999b9c", margin: 0, fontSize: "14px" }}>
          * Traslados aeropuerto / hotel / aeropuerto en regular
        </p>
        <p style={{ color: "#999b9c", margin: 0, fontSize: "14px" }}>{`* ${
          item.days
        } de alojamiento en hotel seleccionado`}</p>
        <p style={{ color: "#999b9c", margin: 0 }}>Desayunos diaros</p>
      </div>
    </Section2>
  </DefaultTemplate>
);
