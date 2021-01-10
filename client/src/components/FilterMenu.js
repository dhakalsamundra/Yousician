import React, { useState } from "react";

import Icon from '../assets/icons/filter.svg'
import LevelMenu from "./LevelMenu";

const FilterMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // implement the function to change the state
  const menuToggle = () => {
    setToggleMenu((prevTog) => !prevTog);
  };
  return (
    <div className="sort-container">
      <div className="sort-filter">
        <div className="sort" onClick={menuToggle}>
          <div className="filter">
            <span>FILTER BY LEVEL</span>

            <div className="filter-icon">
              <p>5 - 10</p>

              <div className="img-filter">
                <img src={Icon} alt="filter icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LevelMenu isVisible={toggleMenu} />
    </div>
  );
};

export default FilterMenu;
