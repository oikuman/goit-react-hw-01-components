import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';
import transactionsInfo from './transactions.json';

const TransactionLines = ({ transactions }) => {
  return transactions.map(line => {
    return (
      <tr key={line.id} className="table-row">
        <td className="table-cell first-column">{line.type}</td>
        <td className="table-cell second-column">{line.amount}</td>
        <td className="table-cell third-column">{line.currency}</td>
      </tr>
    );
  });
};

const TransactionHistory = () => {
  return (
    <div>
      <table className="transaction-history">
        <thead className="table-head">
          <tr className="table-row">
            <th className="table-heading">Type</th>
            <th className="table-heading">Amount</th>
            <th className="table-heading">Currency</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <TransactionLines transactions={transactionsInfo} />
        </tbody>
      </table>
    </div>
  );
};

TransactionLines.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default TransactionHistory;
