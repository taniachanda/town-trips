import React from 'react';
import './DestinationTransport.css';
import { FaUsers } from "react-icons/fa"



const DestinationTransport = (props) => {
    const { img, name, availableSeat, cost } = props.selectedTransport || {};

    return (
        <>
        <div className="col-3">{<img width="35px" src={img} alt="" />}</div>
        <div className="col-3">{name}</div>
        <div className="col-3"><FaUsers/>  {availableSeat}</div>
        <div className="col-3">{cost}</div>
    </>
    );
};
export default DestinationTransport;