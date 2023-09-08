import styled from 'styled-components';

export const StatisticsSection = styled.section`
  background-color: white;
  border-radius: 30px;
  border: 3px solid gray;
  width: 450px;
  margin-top: 50px;
  padding: 15px 30px 0;
  box-shadow: rgba(0, 0, 0, 0.41) 2px 3px 14px 2px;
  transition: box-shadow 0.5s ease-in-out;
  &:hover {
  box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
  -webkit-box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
  -moz-box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 900;
  color: rgb(57, 57, 57);
  margin-bottom: 20px;
  font-size: 30px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  margin-bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

export const StatisticsItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  width: 100%;
  border-top: 2px solid black;
  &:first-of-type {
    border-radius: 12px 0px 0px 12px;
  }
  &:last-of-type {
    border-radius: 0px 12px 12px 0px;
  }
  background: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 20px;
  letter-spacing: 0.1em;
`;
export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 900;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
