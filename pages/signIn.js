import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function signIn() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState("");
    let loadTodos = () => {
        console.log("load todos");
        axios.get("http://localhost:5000/user/users")
          .then(res => {
            setData(res.data)
          })
      };

      useEffect(() => {
        console.log("effect")
        setLoading(true);
        loadTodos();
      }, []);

      const [text, setText ] = useState("")
      const [texts, setTexts ] = useState("")
      function addText(){
        setTexts([...texts, text])
        console.log(texts)
      }
      console.log(texts)
    

    return(
        <div className={styles.container}>
            <div>username</div>
            <input onChange={(e)=> {setText(e.target.value)}} /> 
            <div>password</div>
            <input onChange={(e)=> {setTexts(e.target.value)}}/>
              <button onClick={()=>addText()}>Log in</button>
            {data.map((el, ind) => {
              return <div key={ind}><input type="radio"/> {el.username} {el.password}</div>
            })}
        </div>
    )
}