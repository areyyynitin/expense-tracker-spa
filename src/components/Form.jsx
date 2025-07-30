// components/TransactionForm.js
import React from 'react';

const Form = ({
  amount,
  description,
  type,
  setAmount,
  setDescription,
  setType,
  handleTransaction,
  editId,
  search,
  setSearch,
  filter,
  setFilter
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 mb-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="text-black px-3 py-1 border rounded"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          className="text-black px-3 py-1 border rounded"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="text-black px-3 py-1 border rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          onClick={handleTransaction}
          className="bg-[#5d4c4a] hover:bg-[#81a78b] text-white px-4 py-1 rounded"
        >
          {editId !== null ? 'Update' : 'Submit'}
        </button>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black px-3 py-1 border rounded"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-black px-3 py-1 border rounded"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
