import React from "react";
import { useState } from "react";
import { Columns } from "./Column";



const Settings = (props)=>{
    const {hidesettings,settingOpen}=props;
    


    return (
        <>
        <button onClick={hidesettings}>Settings</button>
        {settingOpen && <div>
                <p>Dimensions and Metrics</p>
                {
                    Columns.map((el,index)=>(
                        <button key={index}>{el.Header}</button>
                    ))
                }
            </div>}
        </>
    )

}
export default Settings