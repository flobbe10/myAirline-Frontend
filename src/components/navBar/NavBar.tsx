import React, { useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { setDisplayOfClass } from "../../helperMethods/events/events.ts"
import DropDown from "./dropDown/DropDown.tsx";


export default function NavBar(props) {

    // add eventListeners
    useEffect(() => addEventListeners());
    
    return (
        <div className="NavBar-container">
           <Link id="myAirline-logo" to="/">
                myAirline
             </Link>

            <div className="NavBar-item">
                <Link className="NavBar-item-heading" to="/">
                    Home
                </Link>
                <DropDown links="Home" className="NavBar-item-dropDown" />
            </div>
            
            <div className="NavBar-item">
                <Link className="NavBar-item-heading" to="/service">
                    Service
                </Link>
                <DropDown links="Service" className="NavBar-item-dropDown" />
            </div>
            
            <div className="NavBar-item">
                <Link className="NavBar-item-heading" to="/jobs">
                    Jobs
                </Link>
                <DropDown links="Jobs" className="NavBar-item-dropDown" />
            </div>

            <div className="NavBar-item">
                <Link className="NavBar-item-heading" to="/contact">
                    Contact
                </Link>
                <DropDown links="Contact" className="NavBar-item-dropDown" />
            </div>

            <div className="NavBar-item">
                <Link className="NavBar-item-heading" to="/about">
                    About
                </Link>
                <DropDown links="About" className="NavBar-item-dropDown" />
            </div>
        </div>
    )
}


const navBarItems = document.getElementsByClassName("NavBar-item");
const navBarDropDowns = document.getElementsByClassName("NavBar-item-dropDown");


function addEventListeners() {

    // show NavBar-dropDown on hover
    setDisplayOfClass(navBarItems, "mouseover", "block", navBarDropDowns);
    setDisplayOfClass(navBarItems, "mouseout", "none", navBarDropDowns);
}


