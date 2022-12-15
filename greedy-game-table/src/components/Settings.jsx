import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handlehide } from "../Redux/action";
import { useSelector } from "react-redux";
import { Columns } from "./Column";
import Styles from "../components/Styles.module.css";


//Setting bar for filtering data
const Settings = (props)=>{
    const [settingOpen,setSettingOpen]= useState(true);
    const { searchParams,setSearchParams}=props;
    const dispatch = useDispatch()
    const state=useSelector(state=>state.Columns)
    
    //hiding or unhiding column of the table
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
        //for hiding setting div
        const hidesettings = ()=>{
            setSettingOpen(!settingOpen);
        }
        const handleFilters = () => {
        hidesettings()
        

    }
    


    return (
        <>
        <div className={Styles.settingbtn}><button onClick={hidesettings}>Settings</button></div>
        {settingOpen && <div className={Styles.setting}>
            <div>
                <h4>Dimensions and Metrics</h4>
                {
                    Columns.map((el,index)=>(
                        <button key={index} id={el.Header} onClick={handleHide}>{el.Header}</button>
                    ))
                }
            </div>
            <div className={Styles.apply}>
                <button onClick={handleFilters}>Apply Changes</button>
            </div>
        </div>
            }
        </>
    )

}
export default Settings