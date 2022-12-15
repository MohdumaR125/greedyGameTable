import React from "react";

const DatePicker = (props)=>{

    const{start,end,handleEnter}=props

    return(
        <>
        <input type="date"  onChange={start}/>
        <input type="date"  onChange={end}/>
        <button onClick={handleEnter}>Enter</button>
        </>
    )
}
export default DatePicker