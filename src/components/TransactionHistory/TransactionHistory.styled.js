import styled from 'styled-components';

export const TransactionTable = styled.table`
  background-color: white;
  border-radius: 30px;
  border: 3px solid gray;
  width: 800px;
  padding: 15px 30px 0;
  box-shadow: rgba(0, 0, 0, 0.41) 2px 3px 14px 2px;
  background-color: rgb(222, 221, 221);
  border-spacing: 0;
  &:hover {
    box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
    -webkit-box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
    -moz-box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
  }
`;

export const TableName = styled.tr`
  background-color: gray;
  width: 100%;
`;

export const Name = styled.th`
  text-align: center;
  font-weight: 900;
  letter-spacing: 0.1em;
`;

export const Table = styled.td`
  border-top: 2px solid grey;
  padding: 20px;
  text-align: center;
  &:not(:nth-child(3n)) {
    border-right: 2px solid grey;
  }
`;

export const Transaction = styled.tr``;
