import DefaultTemplate from "../../components/templates/default";
import { Section2 } from "../../components/styles";
import { Button } from "../../components/atoms";

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
      <h5>Detalle</h5>
      {/* <div style={{ maxWidth: "600px", marginBottom: "30px" }}>
        <Tabs>
          <TabItem text="Todos" />
          <TabItem text="Paquetes" />
          <TabItem text="Salidas Confirmadas" />
        </Tabs>
      </div>
      <List items={travels} /> */}
      <h1>{item.title}</h1>
      <h4>{item.days}</h4>
      <img src={item.image} />
      <p>Desde</p>
      <span>{`$${item.price}`}</span>
      <p>Salida confirmada</p>
      <p>Salida</p>
      <p>Jue 27 Dic 2018 09:29hs</p>
      <p>Retorno</p>
      <p>Mar 01 Ene 2019 09:29hs</p>
      <Button text="RESERVAR" />
      <p>Incluido</p>
      <p>Boleto Aéreo</p>
      <p>Queues $94, DY$15.00, HW$30.75, XT$33.67</p>
      <p>Traslados aeropuerto / hotel / aeropuerto en regular</p>
      <p>{`${item.days} de alojamiento en hotel seleccionado`}</p>
      <p>Desayunos diaros</p>
    </Section2>
  </DefaultTemplate>
);
