
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setdata] = useState([]);
          // fetch api means get apis
const url = "https://jsonplaceholder.typicode.com/posts";
useEffect(()=>{
  fetch(url).
  then(response=>response.json()).
  then(jsonn=>{
    console.log("jsonnnn",jsonn);
    setdata(jsonn);
  })
})
  return (
    <div className="App">
      {
        data.map(item=>{
          return(
            // fetch api means get apis
<div>{item.id} <br></br> {item.title} <br /> {item.body}</div>
          )
        }
        )
      }
    </div>
  );
}

export default App;
