import React, {useState} from 'react';
// import {FaUsers } from 'react-icons/fa';
// import imgMap from '../../images/Map.png'
import './Destination.css'
// import Navbar from '../Navbar/HomeNavbar';
import transportsData from '../../JsonData/Data.json';
import DestinationTransport from '../DestinationTransport/DestinationTransport';
import { useParams } from 'react-router-dom';
// import {  LoadScript, GoogleMap} from '@react-google-maps';

const Destination = () => {   
    const { vehicle } = useParams();

    const selectedTransport = transportsData.find(each => each.name === vehicle);
    console.log(selectedTransport);
    
    const [searched, setSearched] = useState(false)
    const [location, setLocation] = useState({
        pickFrom: '',
        pickTo: '',
        pickDate: null,
        pickTime: null
    })

    const inputHandler = (e) => {
        const newLocation = { ...location };
        newLocation[e.target.id] = e.target.value;
        setLocation(newLocation);
    }

return (
    <div>
        {/* <Navbar/> */}
        <div className="row mx-auto" >
    <div className="col-md-4">
        <div className="container" >
            {!searched && <form className=" Custom-cart container p-4 mt-5"  >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pick from</label>
                    <input onBlur={inputHandler} required type="text" className="form-control" id="pickFrom" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Pick to</label>
                    <input onBlur={inputHandler} required type="text" className="form-control" id="pickTo" />
                </div>
                <div className="form-group row">
                    <div className="col-10">
                        <input onBlur={inputHandler} className="form-control" id="pickDate" type="date" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-10">
                        <input type="time" className='m-1 px-1 form-control' name="pickTime" onBlur={inputHandler} id="pickTime" />
                    </div>
                </div>
                <button onClick={() => searched ? setSearched(false) : setSearched(true)} type="submit" className="btn btn-primary btn-block">Search</button>
            </form>}

            {searched && <form className=" Custom-cart container p-4 mt-5 d-flex flex-column justify-content-center" >
                <div className="routeName row mx-0 d-flex justify-content-around align-baseline align-items-center">
                    <col-6>
                        <div className="timeline">
                            <div className="content1">
                                <h6>{location.pickFrom}</h6>
                            </div>
                            <div className="content2">
                                <h6>{location.pickTo}</h6>
                            </div>
                        </div>
                    </col-6>
                    <col-6 >
                        <h5>Date: {location.pickDate}</h5>
                        <h5>Time: {location.pickTime}</h5>
                    </col-6>
                </div>
                <div className="row mx-0 container routeName" >
                    <DestinationTransport selectedTransport={selectedTransport} ></DestinationTransport>
                </div>
                <div className="row mx-0 container routeName" >
                    <DestinationTransport selectedTransport={selectedTransport} ></DestinationTransport>
                </div>
                <div className="row mx-0 container routeName" >
                    <DestinationTransport selectedTransport={selectedTransport} ></DestinationTransport>
                </div>
            </form>
            }
        </div>
    </div>
    <div className="col-md-8 d-flex justify-content-center my-5">
        {/* <MyMap></MyMap> */}
    </div>
</div>
    </div>
);
};

export default Destination;