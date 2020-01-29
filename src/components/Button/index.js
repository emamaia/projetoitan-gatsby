import React from 'react';

import './style.css'

function Button(props){
    return(
      <button className='btn'  onClick={props.handleClick}>{props.children}</button>

    )
}


export default Button