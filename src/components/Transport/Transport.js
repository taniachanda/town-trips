import React from 'react';
import './Transport.css';
import { Link } from 'react-router-dom';

const Transport = (props) => {
    const {img, name } = props.transport;
    return (
   <div className="card text-center t-card">
      <div className="t-card">
      <Link to={"/destination"}> <img src={img} alt="" className="img-fluid" />
        <h5>{name}</h5></Link>
        
       </div>
   </div>
    );
};

export default Transport;