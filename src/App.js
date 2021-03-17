import "./App.css";
import EnhancedTable from "./components/tables/enhancedTable";
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then((response) => response.json())
      .then((user) => {
        setUserData(user.results);
      })
      .catch((err) => console.err);
  }, []);
  return (
    <div className="App">
      <EnhancedTable props={{ userdata: userData }} />
    </div>
  );
}

export default App;
