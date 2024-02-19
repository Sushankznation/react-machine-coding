import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const url = "https://dummyjson.com/products";
  async function getData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Hello from Carousal</h1>
      <ul>
        {Array.isArray(data) &&
          data.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}
