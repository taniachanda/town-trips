import React from 'react';
import './Transport.css';
import { Link } from 'react-router-dom';


const Transport = (props) => {
  const { img, name } = props.transport;

  return (
    <Link to={`/destination/${name}`}>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3 mt-3 "></div>
      <div className="card t-card">
        <div className="t-card">
          <img src={img} alt="/" className="img-fluid" />
          <h5 className="text-center">{name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Transport;