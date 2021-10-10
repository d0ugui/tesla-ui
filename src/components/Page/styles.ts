import styled from 'styled-components';
import ModelS from '../../assets/models.jpg';
import ModelY from '../../assets/modely.png';
import ModelThree from '../../assets/model3.jpg';
import ModelX from '../../assets/modelx.jpg';
import Solar from '../../assets/solar.jpg';
import Roof from '../../assets/roof.jpg';
import Accessories from '../../assets/accessories.jpg';

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${ModelS}) no-repeat;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background: url(${ModelY});
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: url(${ModelThree}) no-repeat;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: url(${ModelX}) no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(5) {
    background: url(${Solar}) no-repeat;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background: url(${Roof}) no-repeat;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background: url(${Accessories}) no-repeat;
    background-color: #f8f8f8;
    background-position: center;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #f8f8f8;
`;
