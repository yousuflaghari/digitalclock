import React, { useState, useEffect } from "react";
import "./pharmacy.css"
import { faTrash , faPenToSquare, faRightFromBracket, faLeftRight  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Pharmacy = () => {
  const [items, setitems] = useState("")
  const [allitems, setallitems] = useState([])
  const [time, settime] = useState("");
  const [date, setdate] = useState("");
  useEffect(() => {
    setInterval(() => {
      let currentTime = new Date().toLocaleTimeString();
      settime(currentTime)
    }, 1000)
  }, []);
  useEffect(() => {
    let currentdate = new Date().toLocaleDateString();
    setdate(currentdate)
  }, [])
  const handlechange = (e) => {
    setitems(e.target.value)
  }
  const handleclick = () => {
    setallitems([...allitems, {item: items, price: 10, total: 20}])
    setitems("");
  }
  const handledelete = (index) => {
    const updateitem = allitems.filter((_, i) => i !== index)
    setallitems(updateitem)
  }
  const handleedit = (index) => {
    const updateitem = [...allitems];
    updateitem[index] = items;
    setallitems(updateitem)
    setitems("");
  } 
  return (
    <div className="container">
      <div className="time-container">
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
      <h1 className="heading-1">
        Faisal Pharmacy
      </h1>
      <div className="input-btn">
        <input className="inputitem" value={items} placeholder="Enter the medicine name" onChange={handlechange} />
        <button className="btn" onClick={handleclick}>Save</button>
      </div>
      <div className="item-container">{allitems.map((item, index) => (
        <div>{index + 1 + "   "}{JSON.stringify(item)} 
          <FontAwesomeIcon icon={faPenToSquare }   onClick={() => handleedit(index)} style={{ color: 'red' , marginRight:"15px" , marginLeft:"50px"}}/>
          <FontAwesomeIcon icon={faTrash} onClick={() => handledelete(index)}  style={{ color: 'red' }}/>
        </div>
      ))}</div>
    </div>
  )

};

export default Pharmacy;
