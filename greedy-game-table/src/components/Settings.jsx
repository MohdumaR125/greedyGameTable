import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handlehide } from "../Redux/action";
import { Columns } from "./Column";



const Settings = (props)=>{
    const {hidesettings,settingOpen}=props;
    const dispatch = useDispatch()

    const handleHide = (e) => {
        const id=e.target.id;
        const data=Columns.find((el)=>{
            return(el.Header===id)
        })
        const payload=Object.assign({...data,hide:!data.hide})
        const action=handlehide(payload)
        dispatch(action)
    }
    


    return (
        <>
        <button onClick={hidesettings}>Settings</button>
        {settingOpen && <div>
                <p>Dimensions and Metrics</p>
                {
                    Columns.map((el,index)=>(
                        <button id={el.Header} onClick={handleHide}>{el.Header}</button>
                    ))
                }
            </div>}
        </>
    )

}
export default Settings