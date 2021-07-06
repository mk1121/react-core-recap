import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [nayok, setNayok] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setNayok(data));
  }, []);
  const appStyle = {
    backgroundColor: "white",
  };
  return (
    <div className="App" style={appStyle}>
      {nayok.map((nk) => (
        <Nayoks
          name={nk.name}
          email={nk.email}
          address={nk.address}
          key={nk.id}
          username={nk.username}
        ></Nayoks>
      ))}
    </div>
  );
}

function Nayoks(props) {
  const nayokStyle = {
    color: "black",
    backgroundColor: "yellow",
    margin: "30px",
    padding: "20px",
  };
  const address = props.address;
  return (
    <div style={nayokStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Username: {props.username}</h2>
      <h2>Email: {props.email}</h2>

      <h2>
        Address: <br></br>Street: {address.street}
        <br></br>Suite: {address.suite} <br></br>City: {address.city} <br></br>
        Zipcode: {address.zipcode}
      </h2>
    </div>
  );
}

export default App;
