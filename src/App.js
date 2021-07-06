import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [album, setAlbum] = useState([]);

  useEffect(() =>
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setAlbum(data))
  );
  const albmHeaderSty = {
    margin: "auto",
    width: "70%",
  };
  return (
    <div className="App">
      <div className="albmHeader" style={albmHeaderSty}>
        {album.map((dat) => (
          <Myalbm
            src={dat.thumbnailUrl}
            key={dat.id}
            title={dat.title}
            url={dat.url}
          ></Myalbm>
        ))}
      </div>
    </div>
  );
}

function Myalbm(props) {
  const albmStyle = {
    float: "left",
    fontSize: "10px",
    margin: "5px",
    padding: "5px",
    border: "2px solid white",
    backgroundColor: "yellow",
  };
  return (
    <div className="albmClass" style={albmStyle}>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.src} alt={props.title}></img>
      </a>
    </div>
  );
}

export default App;
