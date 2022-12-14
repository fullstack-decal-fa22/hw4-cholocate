import React from 'react';
import Color from './Color.js'  
/* Add any imports you think you might need here! */

const Menu = ({handleClick}) => { 
    const colorsList = ['red', 'pink', 'purple', 'black'];
    return (
      <div className="colorOptions">
          {colorsList.map((item) => 
          <Color color = {item} handleClick = {handleClick}></Color>
          )}
      </div>
    );
}

export default Menu;