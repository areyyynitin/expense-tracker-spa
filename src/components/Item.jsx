import React from 'react';

const Item = ({ t, editTransaction, deleteTransaction }) => {
  return (
    <li className="border-b py-2 flex justify-between items-center">
      <div>
        {t.type === 'income' ? '✅' : '❎'} ₹{t.amount} – {t.description}
        <br />
        <span className="text-sm text-gray-300">{t.date}</span>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => editTransaction(t)}
          className="bg-[#5d4c4a] border border-transparent  hover:bg-[#9b9781] hover:border-[#5d4c4a] text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTransaction(t.id)}
          className="bg-[#5d4c4a] border border-transparent  hover:bg-[#9b9781] hover:border-[#5d4c4a] text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Item;
