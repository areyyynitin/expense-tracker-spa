import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('income');
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    const balance = transactions.reduce((acc, t) =>
      t.type === 'income' ? acc + t.amount : acc - t.amount, 0
    );
    setTotalBalance(balance);
  }, [transactions]);

  const handleTransaction = () => {
    const value = parseInt(amount);
    if (isNaN(value) || !description.trim()) return;

    if (editId !== null) {
      const updated = transactions.map((t) =>
        t.id === editId
          ? { ...t, amount: value, type, description, date: new Date().toLocaleString() }
          : t
      );
      setTransactions(updated);
      setEditId(null);
    } else {
      const newTransaction = {
        id: Date.now(),
        amount: value,
        type,
        description,
        date: new Date().toLocaleString(),
      };
      setTransactions([...transactions, newTransaction]);
    }

    setAmount('');
    setDescription('');
  };

  const deleteTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  const editTransaction = (t) => {
    setAmount(t.amount);
    setDescription(t.description);
    setType(t.type);
    setEditId(t.id);
  };

  const filteredTransactions = transactions.filter((t) => {
    const matchesType = filter === 'all' || t.type === filter;
    const matchesSearch = t.description.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  
  return (
  <div className="bg-[#494736] min-h-screen w-full">
    <div className="p-6 max-w-2xl mx-auto text-white  min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Total Balance: ₹{totalBalance}</h2>
      </div>

      <Form
        amount={amount}
        description={description}
        type={type}
        setAmount={setAmount}
        setDescription={setDescription}
        setType={setType}
        handleTransaction={handleTransaction}
        editId={editId}
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <List
        transactions={filteredTransactions}
        editTransaction={editTransaction}
        deleteTransaction={deleteTransaction}
      />
    </div>
  </div>
);

}

export default App;
