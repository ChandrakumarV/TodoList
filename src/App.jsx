import { useState } from "react";

function App() {
  const [data, setData] = useState(
    () => JSON.parse(window.localStorage.getItem("data")) || []
  );
  const [text, setText] = useState("");

  function ADD(e) {
    e.preventDefault()
    if (text === "") return;
    const newData = [...data, text];
    setData(newData);
    window.localStorage.setItem("data", JSON.stringify(newData));
    setText("");
  }

  function remove(it) {
    setData((cur) => cur.filter((item) => item !== it));
    window.localStorage.setItem(
      "data",
      JSON.stringify(data.filter((item) => item !== it))
    );
  }
  return (
    <div className="container">

      <h1>To do List</h1>
      <form className="input-con">
        <input
          type="text"
          placeholder="Enter a description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={ADD}>Add</button>
      </form>

      {data.length&&<div className="item-con">
        {data.map((item, i) => (
          <div key={i} className="item">
            <span>{item}</span>
            <button onClick={() => remove(item)}>Remove</button>
          </div>
        ))}
      </div>
      }
      <p>Developed by 2024 @ chandru</p>
    </div>
  );
}

export default App;
