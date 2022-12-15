import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handlehide } from "../Redux/action";
import { useSelector } from "react-redux";
import { Columns } from "./Column";



const Settings = (props)=>{
    const [settingOpen,setSettingOpen]= useState(true);
    const { searchParams,setSearchParams}=props;
    const dispatch = useDispatch()
    const state=useSelector(state=>state.Columns)
    
    const handleHide = (e) => {
        const id=e.target.id;
        const data=Columns.find((el)=>{
            return(el.Header===id)
        })
        const payload=Object.assign({...data,hide:!data.hide})
        if(payload.hide===false){
            searchParams.set(payload.accessor,false);
        }else{
            searchParams.delete(payload.accessor);
        }
            setSearchParams(searchParams)
            const action=handlehide(payload)
            dispatch(action)
        }
        const hidesettings = ()=>{
            setSettingOpen(!settingOpen);
        }
        const handleFilters = () => {
        console.log(state)
        

    }
    


    return (
        <>
        <button onClick={hidesettings}>Settings</button>
        {settingOpen && <div>
            <div>
                <p>Dimensions and Metrics</p>
                {
                    Columns.map((el,index)=>(
                        <button key={index} id={el.Header} onClick={handleHide}>{el.Header}</button>
                    ))
                }
            </div>
            <div>
                <button onClick={hidesettings}>Close</button>
                <button onClick={handleFilters}>Apply Changes</button>
            </div>
        </div>
            }
        </>
    )

}
export default Settings