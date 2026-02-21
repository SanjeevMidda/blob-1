import { useState } from "react";
import "./index.css";

function App() {
  // create a blob which changes its corners every 1 sec

  // DONE create blob
  // DONE create state to hold dynamic values for blob
  // create function to change blob's corners
  // create interval between each transition

  const [corners, setCorners] = useState({
    TLCorner: "10px",
    TRCorner: "10px",
    BRCorner: "10px",
    BLCorner: "10px",
  });

  const changeBlob = () =>
    setCorners({
      TLCorner: "50px",
      TRCorner: "50px",
      BRCorner: "50px",
      BLCorner: "50px",
    });

  console.log(corners);
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
