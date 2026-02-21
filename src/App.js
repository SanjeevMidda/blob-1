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
      TLCorner: `${Math.floor(Math.random() * 900)}px`,
      TRCorner: `${Math.floor(Math.random() * 900)}px`,
      BRCorner: `${Math.floor(Math.random() * 900)}px`,
      BLCorner: `${Math.floor(Math.random() * 900)}px`,
    });

  useEffect(() => {}, [setInterval(changeBlob, 200)]);

  return (
    <div className="App">
      <div
        className="blob"
        onClick={changeBlob}
        style={{
          borderRadius: `${corners.TLCorner} ${corners.TRCorner} ${corners.BRCorner} ${corners.BLCorner}`,
        }}
      ></div>
    </div>
  );
}

export default App;
