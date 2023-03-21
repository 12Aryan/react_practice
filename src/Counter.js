import React,{useState} from 'react'


let styles ={
    textDecoration : "underline"
};

const Counter = () => {
    let [count,setCount] = useState(0);
    const increment=()=>{
      setCount(count+1);
    }
    const decrement=()=>{
     (count===0)? setCount(0): setCount(count-1);
      
    }
    const clearAll=()=>{
      setCount(0);
    }

    return (<>
        <hr />
    <h1 style={styles}>Counter</h1>
      <h1> {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clearAll}>clear</button>
    </>
  );
}

export default Counter;
