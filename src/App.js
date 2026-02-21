import { useEffect, useState } from "react";
import "./index.css";

function App() {
  // create a blob which changes its corners every 1 sec

  // DONE create blob
  // DONE create state to hold dynamic values for blob
  // DONE create function to change blob's corners
  // create interval between each transition

  const [corners, setCorners] = useState({
    TLCorner: "10px",
    TRCorner: "10px",
    BRCorner: "10px",
    BLCorner: "10px",
  });

  const changeBlob = () =>
    setCorners({
      topLeft: `${Math.floor(Math.random() * 100)}%`,
      topRight: `${Math.floor(Math.random() * 100)}%`,
      bottomRight: `${Math.floor(Math.random() * 100)}%`,
      bottomLeft: `${Math.floor(Math.random() * 100)}%`,
    });

  useEffect(() => {
    const startBlob = setInterval(changeBlob, 250);

    return () => clearInterval(startBlob);
  }, []);

  return (
    <div className="App">
      <h1>bio.</h1>
      <div
        className="blob"
        onClick={changeBlob}
        style={{
          borderRadius: `${corners.topLeft} ${corners.topRight} ${corners.bottomRight} ${corners.bottomLeft}`,
        }}
      ></div>
    </div>
  );
}

export default App;
