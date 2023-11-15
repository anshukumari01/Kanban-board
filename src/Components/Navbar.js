import React, { useState } from 'react'
import { BiSlider } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";

import './CSS/Navbar.css';

export default function Nav(props) {
    const [displayOnClick, setdisplayOnClick] = useState(false);


    function handleDisplay(e) {
        setdisplayOnClick(!displayOnClick);
        if (e.target.value !== undefined) {
            props.handleGroupValue(e.target.value);
        }
    }
    function handleOrder(e) {
        setdisplayOnClick(!displayOnClick);
        if (e.target.value !== undefined) {
            props.handleOrderValue(e.target.value);
        }
    }

    return (
        <>
            <div className="nav" >
                <div className="container">
                    <div>
                        <button className="btn" onClick={handleDisplay}>
                            <BiSlider className="filter" /> Display <SlArrowDown className="drop" />
                        </button>


                        <div className={displayOnClick ? "dropdown dropdown-show" : "dropdown"}>
                            <div className="filters">
                            <span>Grouping</span>
                                    <select value={props.groupValue} onChange={handleDisplay} className='selector' name="grouping" id="">
                                        <option value="status">Status</option>
                                        <option value="user">User</option>
                                        <option value="priority">Priority</option>
                                    </select>
                                
                            </div>
                            <div className="filters">
                            <span>Ordering</span>
                                    <select value={props.orderValue} onChange={handleOrder} className='selector' name="grouping" id="">
                                        <option value="priority">Priority</option>
                                        <option value="title">Title</option>
                                    </select>
                                
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

