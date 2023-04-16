import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
    const[openDate, setOpenDate] = useState(false);
    const[destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        },
      ]);

    const[openOptions, setOpenOptions] = useState(false);
    const[Options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {return {
            ...prev, [name] : operation === "i" ? Options[name] + 1: Options[name] - 1,
        }})
    }

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate("/hotels", {state:{destination, date, Options}})
    }

    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listNode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>STAYS</span> 
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span> 
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span> 
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span> 
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span> 
                    </div>
                </div>
                { type !== "list" &&  <>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>

                <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account                </p>
                <button className="headerbtn">Sign in/Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                        <input type="text" placeholder="Where are you going" className="headerSearchInput"
                        onChange = {e => setDestination(e.target.value)} />
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                       <span onClick ={() => setOpenDate(!openDate)} 
                       className="headerSearchText">
                       {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                       </span>

                       {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className = "date"
                        />}

                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                       <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${Options.adult} adult . ${Options.children} children . ${Options.room} room.`}</span>
                       { openOptions && 
                       <div className="options">

                        <div className="optionItem"> 
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button disabled = {Options.adult <= 1} className="optionCounterButton" onClick = {() => handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{Options.adult}</span>
                                <button className="optionCounterButton" onClick = {() => handleOption("adult", "i")}>+</button>
                            </div>
                        </div>

                        <div className="optionItem"> 
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button disabled = {Options.children <= 0}  className="optionCounterButton" onClick = {() => handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{Options.children}</span>
                                <button className="optionCounterButton" onClick = {() => handleOption("children", "i")}>+</button>
                            </div>
                        </div>

                        <div className="optionItem"> 
                            <span className="optionText">Room</span>
                            <div className="optionCounter"> 
                                <button disabled = {Options.room <= 1} className="optionCounterButton" onClick = {() => handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{Options.room}</span>
                                <button className="optionCounterButton" onClick = {() => handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                       
                       </div>
                        }
                    </div>
                    
                    <div className="headerSearchItem">
                    <button className="headerbtn" onClick={handleSearch}>Search</button>
                    </div>

                </div>
                </>}
            </div>
        </div>
    )
}

export default Header