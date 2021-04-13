import React from "react";
import Location from "../location";
import Price from "../price";
import FloorSpace from "../floorspace";
import './index.scss';


const Filter:React.FC<{stateProp:any, inputChange:any}> = ({ inputChange, stateProp }) => {
  return (
    <div className='filterSection'>
      <Location
        inputProp={inputChange}
        city={stateProp.city}
        hometype={stateProp.hometype}
        bedroom={stateProp.bedroom}
      />
      <Price
        minProp={stateProp.minPrice}
        maxProp={stateProp.maxPrice}
        inputProp={inputChange}
      />
      <FloorSpace
        minFloor={stateProp.minFloorSpace}
        maxFloor={stateProp.maxFloorSpace}
        inputProp={inputChange}
      />
    </div>
  );
};

export default Filter;