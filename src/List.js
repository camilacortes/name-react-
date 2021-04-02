import React from 'react';

function List(props){
  return(
    <div>
      <div className="list-names">{props.firstName} {props.lastName} <br></br></div>
     
    </div>
  )
}

export default List