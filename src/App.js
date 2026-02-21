import { useEffect, useState } from "react";
import "./index.css";

function App() {
  // create a blob which changes its corners every 1 sec

  // DONE create blob
  // DONE create state to hold dynamic values for blob
  // DONE create function to change blob's corners
  // create interval between each transition

  const randomCornerValue = () => `${Math.floor(Math.random() * 100)}`;

  const [corners, setCorners] = useState({
    topLeft: "10",
    topRight: "10",
    bottomRight: "10",
    bottomLeft: "10",
  });

  const changeBlob = () =>
    setCorners({
      topLeft: randomCornerValue(),
      topRight: randomCornerValue(),
      bottomRight: randomCornerValue(),
      bottomLeft: randomCornerValue(),
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
          borderRadius: `${corners.topLeft}% ${corners.topRight}% ${corners.bottomRight}% ${corners.bottomLeft}%`,
        }}
      ></div>
    </div>
  );
}

export default App;
