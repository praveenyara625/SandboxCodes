import { useState } from "react";
import "./styles.css";

export default function App() {
  let [counter, setCounter] = useState(5);
  const [data, setData] = useState([1, 2, 3, 4]);

  const addtoStart = (e) => {
    setData([counter, ...data]);
    setCounter(counter + 1);
  };

  return (
    <div>
      <ul>
        {data.map((d, index) => (
          <li key={index}>
            Key:{index}
            Data:{d}
            <input />
          </li>
        ))}
      </ul>
      <button onClick={addtoStart}>add to Start</button>
    </div>
  );
}
