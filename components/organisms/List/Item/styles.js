import styled from 'styled-components'

const ItemContainer = styled.div`
  display: grid;
  grid-template-areas: "avatar info stock departure-date arrival-date prices actions";
  grid-template-columns: 145px 250px auto auto auto auto 180px;
  color: #00b0ea;
  margin: 0 auto;
  width: 100%;
  background: #fff;
  margin: 10px 0px;
`

const Avatar = styled.div`
  grid-area: avatar;
  background-image: url('${props => props.backgroundImage}');
  background-position: top center;
  background-size: cover;
  position: relative;
  cursor: pointer;
  margin: 0;
  grid-gap: 0;
`

const Info = styled.div`
  padding: 7px 0px 0px 10px;
  grid-area: info;
  text-align: left;
`

const Stock = styled.div`
  padding: 12px 0;
  grid-area: stock;
  text-align: left;
`

const DepartureDate = styled.div`
  padding: 12px 0;
  grid-area: departure-date;
  text-align: left;
`

const ArrivalDate = styled.div`
  padding: 12px 0;
  grid-area: arrival-date;
  text-align: left;
`

const Prices = styled.div`
  grid-area: prices;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`

const Actions = styled.div`
  grid-area: actions;
  text-align: left;
`

const HR = styled.hr`
  margin: 0;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

const Small = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  color: #999b9c;
`

const P = styled.p`
  color: #4c4c4e;
  margin: 0;
  font-size: 15px;
`

const Days = styled.p`
  color: #4f9c84;
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -1px;
`

export {
  ItemContainer,
  Avatar,
  Info,
  Stock,
  DepartureDate,
  ArrivalDate,
  Prices,
  Actions,
  HR,
  Small,
  P,
  Days
}
