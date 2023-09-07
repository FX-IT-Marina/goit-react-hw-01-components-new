import PropTypes from 'prop-types';
import { TransactionTable } from './TransactionHistory.styled';
import { TableName } from './TransactionHistory.styled';
import { Name } from './TransactionHistory.styled';
import { Table } from './TransactionHistory.styled';
import { Transaction } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <TableName>
          <Name>Type</Name>
          <Name>Amount</Name>
          <Name>CuNamerrency</Name>
        </TableName>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction key={id}>
            <Table>{type}</Table>
            <Table>{amount}</Table>
            <Table>{currency}</Table>
          </Transaction>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
