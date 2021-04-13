import React from "react";
import './index.scss';


const FloorSpace:React.FC<{minFloor:any ,maxFloor:any, inputProp:any}> = ({ inputProp, minFloor, maxFloor }) => {
  return (
    <React.Fragment>
      <div className = "FloorContainer">
        <h3>Floor Space</h3>
        <label htmlFor="FloorSpace">
          <input
            type="text"
            name="minFloorSpace"
            value={minFloor}
            onChange={inputProp}
          />
          <input
            type="text"
            name="maxFloorSpace"
            value={maxFloor}
            onChange={inputProp}
          />
        </label>
      </div>
    </React.Fragment>
  );
};

export default FloorSpace;