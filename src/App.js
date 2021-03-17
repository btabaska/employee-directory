import "./App.css";
import EnhancedTable from "./components/tables/enhancedTable";
import { useState, useEffect } from "react";
import useDropdown from "./components/select/useDropdown";
function App() {
  const [userData, setUserData] = useState([]);
  const [title, TitleDropdown] = useDropdown("Title", "", [
    "Mr",
    "Mrs",
    "Miss",
    "Madame",
    "Ms",
    "Monsieur",
  ]);
  useEffect(() => {
    setUserData([]);
    fetch("https://randomuser.me/api/?format=json&results=15")
      .then((response) => response.json())
      .then((user) => {
        title !== ""
          ? user.results.forEach((user) => {
              console.log(user.name.title + " " + title);
              user.name.title === title
                ? setUserData((userData) => [...userData, user])
                : console.log();
            })
          : setUserData(user.results);
      })
      .catch((err) => console.err);
  }, [title]);
  return (
    <div className="App">
      <EnhancedTable props={{ userdata: userData }} />
      <TitleDropdown />
    </div>
  );
}

export default App;
