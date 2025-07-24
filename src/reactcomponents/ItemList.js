import React from 'react'

 const ItemsList = ({items , onDeleteItem}) => {
  return (
    <div className="item-list">
        <h2>ITEM LIST</h2>
        {items.map((item,index)=> (
            <div className="items" key={index}>
              <div>{item.item}</div>
              <div>
                Quantity:{item.quantity}
              </div>
              <div> price: ${item.price}</div>
              <button onClick ={ 
                ()=>
                onDeleteItem(index) }>
                Delete
                </button>
            </div>
       ) )}
    </div>
  );
};

export default ItemsList;