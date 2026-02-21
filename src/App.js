import { useEffect, useState } from "react";
import "./index.css";

function App() {
  // create a blob which changes its corners every 1 sec

  // DONE create blob
  // DONE create state to hold dynamic values for blob
  // DONE create function to change blob's corners
  // create interval between each transition

  const randomCornerValue = () => Math.floor(Math.random() * 100);

  const [corners, setCorners] = useState({
    topLeftH: 10,
    topLeftV: 10,
    topRightH: 10,
    topRightV: 10,

    bottomRightH: 10,
    bottomRightV: 10,

    bottomLeftH: 10,
    bottomLeftV: 10,
  });

  const changeBlob = () =>
    setCorners({
      topLeftH: randomCornerValue(),
      topLeftV: randomCornerValue(),

      topRightH: randomCornerValue(),
      topRightV: randomCornerValue(),

      bottomRightH: randomCornerValue(),
      bottomRightV: randomCornerValue(),

      bottomLeftH: randomCornerValue(),
      bottomLeftV: randomCornerValue(),
    });

  useEffect(() => {
    const startBlob = setInterval(changeBlob, 300);

    return () => clearInterval(startBlob);
  }, []);

  return (
    <div className="App">
      <h1 className="title">bio.</h1>
      <div
        className="blob"
        onClick={changeBlob}
        style={{
          borderRadius: `${corners.topLeftH}% ${corners.topRightH}% ${corners.bottomRightH}% ${corners.bottomLeftH}% / ${corners.topLeftV}% ${corners.topRightV}%  ${corners.bottomRightV}% ${corners.bottomLeftV}%`,
        }}
      ></div>
    </div>
  );
}

export default App;
