import { useState } from 'react';
import './App.css';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addList () {
    if (inputValue.trim() === '') return;
    const newItem = { text: inputValue, bought: false };
    
    setItems(items.concat(newItem));
    setInputValue('');
  };
  function toggleBought(index) {
    const newItems = items.slice();
    newItems[index].bought = !newItems[index].bought;
    
    setItems(newItems);
  }

  function removeItem(index) {
    const newItems = items.slice();
    newItems.splice(index, 1);
    
    setItems(newItems);
  }
  

  return (
    <>
    <div id='beCenter'>
    <div id='box'>
      <div id='head'>
        <h2>Shopping List</h2>
      </div>
      
      <div id='add'>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addList}>Add</button>

      </div>
      
      <div id='show'>
        <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleBought(index)}
            style={{
              textDecoration: item.bought ? 'line-through' : 'none',
              backgroundColor: item.bought ? 'pink' : '#fdd7f1'
            }}
          >
            {item.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeItem(index);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  </div>
  </>
);

}
export default ShoppingList;