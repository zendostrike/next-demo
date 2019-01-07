import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  flex-direction: row;
  justify-content: space-between;
  color: #00b0ea;
  margin: 0 auto;
  width: 100%;
  background: #fff;
  margin: 10px 0px;
  grid-template-columns: 3fr repeat(6,1fr);
  @media (max-width: 1250px) {
    grid-template-columns: 3fr repeat(5,1fr);
    >div:first-child{
      grid-column: 1/4;
    }
  }
  @media (max-width: 1100px) {
       
  }
  @media (max-width:900px) {
    grid-template-columns: 1fr repeat(4,1fr);
    >div:first-child{
      grid-column: 1/5;
    } 
  }
`;

const Avatar = styled.div`
  background-image: url('${props => props.backgroundImage}');
  background-position: top center;
  background-size: cover;
  position: relative;
  cursor: pointer;
  margin-right: 15px;
`;

const Info = styled.div`
  margin-right: 20px;
  padding: 7px 0px 0px 0px;
  text-align: left;
  @media (max-width: 1300px) {
    margin-right: 1em;
  }
`;

const Stock = styled.div`
  padding: 12px 0;
  text-align: left;
`;

const DepartureDate = styled.div`
  padding: 12px 0;
  text-align: left;
`;

const ArrivalDate = styled.div`
  padding: 12px 0;
  text-align: left;
`;

const PriceBefore = styled.div`
  text-align: left;
  padding: 0px 20px;
  p{
    font-size: 1.8em;
  }
  @media (max-width: 1250px) {
    grid-column: 4;
  } 
  @media (max-width: 900px) {
    grid-column: 3;
  }  
  @media (max-width: 780px) {
    p{
      font-size: 16px;
    }
  }
`;

const PriceNow = styled.div`
  text-align: left;
  padding: 0px 20px;
`;

const Actions = styled.div`
  padding: 0px 20px;
`;

const HR = styled.hr`
  margin: 0;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Small = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  color: #999b9c;
`;

const P = styled.p`
  color: #4c4c4e;
  margin: 0;
  font-size: 15px;
`;

const Days = styled.p`
  color: #4f9c84;
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -1px;
`;
const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;  
`;
export {
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
  Days,
  InfoWrapper
};
