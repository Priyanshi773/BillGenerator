
import { useState } from 'react'


const BillDetails = ({onAddItem , onDeleteItem}) => {
    const [item , setItem] = useState('');
    const [price , setPrice] =useState(0);
    const [quantity , setQuantity] = useState(1);
    const [errorMessage , setErrorMessage] = useState('');

    const handleAddItem = () => {
      if(!item.trim()){
        setErrorMessage(" please input the valid item");
        return;
      }
    
    const newItem = {
    item,
    price: parseFloat(price),
    quantity: parseInt(quantity)
  };

    onAddItem(newItem); 
        setItem('');
        setQuantity(0);
        setPrice(0);
        setErrorMessage('');
      
};

  return (
    <div>
     <label>Item:</label>
     <input type="text"
          value = {item}
          onChange ={
            (e) => 
             setItem(e.target.value)} />
       <label>Quantity:</label>
            <input type="number"
                value={quantity}
                onChange={
                    (e) =>
                        setQuantity(e.target.value)} />
            <label>Price:</label>
            <input type="number"
                value={price}
                onChange={
                    (e) =>
                        setPrice(e.target.value)} />
            <button
                onClick={handleAddItem}>
                Add Item
            </button>
            <p style={{ color: 'red' }}>{errorMessage}</p>       
    </div>
  )
};
export default BillDetails;
