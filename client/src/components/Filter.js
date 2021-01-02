import React from "react";

import Icon from "../assets/icons/filter.svg";

const Filter = () => {
  return (
    <div className='filter'>

          <span>FILTER BY LEVEL</span>

          <div className='filter-icon'>

            <p>5 - 10</p>

            <div className='img-filter'>

            <img src={Icon} alt='filter icon' />
            
            </div>
          </div>
        </div>
  );
};

export default Filter;
