import React from "react";
import Styles from "../components/Styles.module.css"


//date picker for fetching data
const DatePicker = (props)=>{

    const{start,end,handleEnter}=props

    return(
        <div className={Styles.datepicker}>
        <div>
        <input type="date"  onChange={start}/>
        <input type="date"  onChange={end}/>
        </div>
        <button onClick={handleEnter}>Enter</button>
        </div>
    )
}
export default DatePicker