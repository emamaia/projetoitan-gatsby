import React from 'react';

import './style.css'

function Links(props){
    return(
       <a className='link' target='__blank' href={props.link}>{props.children}</a>
    )
}

export default Links