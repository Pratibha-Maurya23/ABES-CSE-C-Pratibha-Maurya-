import { useEffect,useState } from 'react';
import './App.css'

function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/about")
    .then((res)=>res.json())
    .then((result)=>{
      setData(result)
    })
  },[]);

  return ( <div>
      <h1>Fetched Data</h1>
      {data.map((item) => (
          <div key={item.id}>
    <h3>{item.name}</h3>
    <p>{item.class}</p>
  </div>
      ))}
    </div>)
}

export default App;
