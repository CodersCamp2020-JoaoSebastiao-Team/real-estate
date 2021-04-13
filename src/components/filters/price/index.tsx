import React from 'react';
import './index.scss';

const Prices:React.FC<{minProp:any ,maxProp:any, inputProp:any}> = ({ minProp, maxProp, inputProp }) => {
  return (
    <React.Fragment>
      <div className="PriceContainer">
        <h6>Prices</h6>
        <div className="PriceLabel">
          <input
            type="text"
            name="minPrice"
            onChange={inputProp}
            value={minProp}
          />
          <input
            type="text"
            name="maxPrice"
            onChange={inputProp}
            value={maxProp}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Prices;