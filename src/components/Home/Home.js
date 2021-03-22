import React, { useEffect, useState } from 'react';
import './Home.css';
import transportsData from '../../JsonData/Data.json';
import Transport from '../Transport/Transport';
import { Link } from 'react-router-dom';
const Home = () => {
    const[transports, setTransport] = useState([]);
useEffect(() =>{
    setTransport(transportsData)
}, []);
    return (
        <div className="container-fluid row t-card">
            {
               transports.map(transport => 
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <Transport transport ={transport}></Transport>
                </div>)
            }
        </div>
    );
};

export default Home;