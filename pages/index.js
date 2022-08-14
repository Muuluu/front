import React from "react";

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

const Home = () => {
  const [mode, setMode] = useStickyState("day", "mode");
  return (
    <div className="container">
      <select onChange={ev => setMode(ev.target.value)} value={mode}>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Home;




// import { useEffect, useState } from 'react'
// import styles from '../styles/Home.module.css'
// import axios from 'axios';


// export default function Home() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [todo, setTodo] = useState("");
//   let changeHandler = (event) => {
//     setTodo(event.target.value);
//   };

//   let loadTodos =  ()  => {
//     console.log("load todos");
//     axios.get("http://localhost:5000/check/checklists")
//       .then(res => {
//          setData(res.data);
//         console.log(data);
//       })
//   };
//   useEffect(() => {
//     console.log("effect")
//     setLoading(true);
//     loadTodos();
//   }, []);

//   let users = "http://localhost:5000/check/create";

//   const [text, setText ] = useState("")
//   const [texts, setTexts ] = useState([])
//   function addText(){
//     setTexts([...texts, text])
//     console.log(texts)
//     axios.post(users, {task: text})
//       .then(res => {
//         console.log(res);
//       })
//   }
//   console.log(texts)

// let index = 0

//   return (
//     <div className={styles.container}>
//         <input onChange={(e)=> {setText(e.target.value)}} /> 
//       <button onClick={()=>addText()}>submit</button>
//       {data.map((el, ind) => {
//         index=index+1
//         return <div key={ind}><input type="radio"/> {index}. {el.task}</div>
//       })}
//       {texts.map((el, ind) => {
//         index=index+1
//         return <div key={ind}><input type="radio"/> {index}. {el}</div>
//       })}
      
//     </div>  
    
//   )
// }
