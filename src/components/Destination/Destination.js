import React, { useContext, useEffect, useState, } from 'react';
import {FaUsers } from 'react-icons/fa';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import imgMap from '../../images/Map.png'
import './Destination.css'
import transportsData from '../../JsonData/Data.json';



const Destination = (props) => {
   const {rideId} = useParams();
    const chooseRide = transportsData[rideId]
    console.log(chooseRide)

   const [ name, setTransport] = useState({});
   useEffect(() =>{
    setTransport(transportsData)
}, []);

    const [pickFrom, setPickFrom] = useState();
    const [pickTo, setPickTo] = useState();
    const [showPlace, setPlace] = useState();

            function getRide(val) {
                setPickFrom(val.target.value)
                setPlace(false)
            }
            function getRide(val) {
                setPickTo(val.target.value)
                setPlace(false)
            }



//   const [fromPlace, setFromPlace]= useState();
//   const [toPlace, setToPlace]= useState();
//   const [showPlace, SetShowPlace]= useState(false);
//         function getPlace(val) {    
//             setToPlace(val.target.value)
//             SetShowPlace(false)
//         }
//         function getPlace(val) {
//             setFromPlace(val.target.value)
//             SetShowPlace(false)
//         }



    
    const [user] = useContext(UserContext);
    return (
        <div className="container">
            <h6>{user.name}</h6>
            <div className="row">
           <div className="">                 
            {
                showPlace?<p>{pickFrom}</p>: ""
            }
            {
                showPlace?<p>{pickTo}</p>: ""
            }
           {/* <div className="">
           <ul>
               <img src={imgBadge} />
               <li>Bike</li>
               <FaUsers/>
               <li>$67</li>
               </ul>
               <ul>
               <img src={imgBadge} />
               <li>Bike</li>
               <FaUsers/>
               <li>$67</li>
               </ul>
               <ul>
               <img src={imgBadge} />
               <li>Bike</li>
               <FaUsers/>
               <li>$67</li>
            </ul>
           </div> */}
            </div>
           </div>
            <div className="row">
            <div className="col-md-4">
               <label>Pick From</label><br/>
               <input onChange={getRide} type="text" name="name" /><br/> 
               
               <label>Pick To</label> <br/>
               <input onChange={getRide} type="text" name="name" /><br/>
               
               <button onClick={()=>setPlace(false)} className="btn btn-danger">Search</button>
            </div>
            <div className="col-md-8 align-self-end">
            <img src={imgMap} />
            </div>
       
            </div>
        </div>
    );
};

export default Destination;