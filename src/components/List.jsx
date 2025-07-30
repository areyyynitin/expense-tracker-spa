import React from 'react';
import Item from './Item';

const List = ({
  transactions,
  editTransaction,
  deleteTransaction,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
      <ul className="space-y-2">
        {transactions.length === 0 ? (
          <p className="text-gray-200">No transactions found.</p>
        ) : (
          transactions.map((t) => (
            <Item
              key={t.id}
              t={t}
              editTransaction={editTransaction}
              deleteTransaction={deleteTransaction}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default List;
