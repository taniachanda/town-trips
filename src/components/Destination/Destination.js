import React, { useContext, useEffect, useState, } from 'react';
import {FaUsers } from 'react-icons/fa';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import imgMap from '../../images/Map.png'
import './Destination.css'
import transportsData from '../../JsonData/Data.json';



const Destination = () => {
//     const [ ride, getRide] = useState("")
//     const { key } = useParams()

//     // console.log(chooseRide)
  
//     const selectededRideDetails = transport.find (x => x.id = key)
// }, []);

  const [fromPlace, setFromPlace]= useState();
  const [toPlace, setToPlace]= useState();
  const [showPlace, SetShowPlace]= useState(false);
        function getPlace(val) {    
            setToPlace(val.target.value)
            SetShowPlace(false)
        }
        function getPlace(val) {
            setFromPlace(val.target.value)
            SetShowPlace(false)
        }



    
    const [user] = useContext(UserContext);
    return (
        <div className="container">
            <div className="row">
           <div className="">                 
            {
                showPlace?<p>{fromPlace}</p>: ""
            }
            {
                showPlace?<p>{toPlace}</p>: ""
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
               <input onChange={getPlace} type="text" name="name" /><br/> 
               
               <label>Pick To</label> <br/>
               <input onChange={getPlace} type="text" name="name" /><br/>
               
               <button onClick={()=>SetShowPlace(false)} className="btn btn-danger">Search</button>
            </div>
            <div className="col-md-8 align-self-end">
            <img src={imgMap} />
            </div>
       
            </div>
        </div>
    );
};

export default Destination;