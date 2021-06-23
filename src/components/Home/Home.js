import React from 'react';
import './Home.css';
import transportsData from '../../JsonData/Data.json';
import Transport from '../Transport/Transport';

const Home = () => {

    return (
        <div className="container" >
            <div className="row d-flex align-items-center justify-content-around" style={{ minHeight: '100vh' }}>
                {
                    transportsData.map(transport =><Transport key={transport.name} transport={transport}></Transport>)
                }
            </div>
        </div>

    );
};

export default Home;