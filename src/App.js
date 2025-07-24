// App.js
import React, { useState } from 'react';
import BillDetails from './reactcomponents/BillDetails';
import ItemList from './reactcomponents/ItemList';
import {TotalAmount} from './reactcomponents/TotalAmount';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateTotalAmount = () => {
    return items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="App">
      <h1>Bill/Invoice Generator</h1>
      <BillDetails onAddItem={handleAddItem} />
      <ItemList items={items} onDeleteItem={handleDeleteItem} />
      <TotalAmount total={calculateTotalAmount()} />
    </div>
  );
}

export default App;
