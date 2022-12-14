import React from "react";

const DatePicker = (props)=>{

    const{start,end}=props

    return(
        <>
        <input type="date"  onChange={start}/>
        <input type="date"  onChange={end}/>
        </>
    )
}
export default DatePicker