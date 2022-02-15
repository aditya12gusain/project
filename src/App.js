import { useEffect } from "react";
import fetch from "cross-fetch";
import "./styles.css";

export default function App() {
  useEffect(() => {
    async function getData() {
      let response = await fetch(
        "https://lx.festo.com/searchService/api/search/learning-paths/public",
        {
          mode: "no-cors"
        }
      );
      let data = await response.json();
      return data;
    }
    getData().then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
