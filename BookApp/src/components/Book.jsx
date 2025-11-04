import './Book.css';
import { useState } from 'react';

const Book = (props) => {
  const [count,setCount]=useState(0);

  const increment = () =>{
    setCount(count+1);
  }
  const decrement= ()=>{
    setCount(count-1);
  }
  return (
    <div id='book'>
      <img src={props.img} alt="" width={100} height={100}/>
      <h4>Title:{props.title}</h4>
      <h4>Price:{props.price}</h4>
      <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default Book
