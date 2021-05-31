import React from 'react';

const renderCafe = (props) => (
  <div>
    <img src={props.logo} style={{width: '50%'}}/>
    <p>{props.name} <br />
       Review: <b>{props.review}</b> <br />
       Address: {props.address} <br />
       Contact: {props.phone} <br />
    </p>
  </div>
)

export default renderCafe;
