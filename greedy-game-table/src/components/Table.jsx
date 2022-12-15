import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Styles from "../components/Styles.module.css"



//reusable table 
const Table = (props)=>{
    const {data}=props;
    const state=useSelector(state=>state.Columns)

    data.forEach(el => {
       if(el.app_id=="123456"){
        el.app_id="Panda Draw";
       }
       if(el.app_id=="789652"){
        el.app_id="Word Crush";
       }
       if(el.app_id=="741553"){
        el.app_id="Word Crush";
       }
       if(el.app_id=="986321"){
        el.app_id="Brain Quiz";
       }
       if(el.app_id=="320248"){
        el.app_id="Age Calculator";
       }
        
    });
  

    return (
        <table className={Styles.table}>
            <thead>
                <tr>
                    {
                       state.map((el,index)=>(
                          el.hide &&  <th key={index} className={Styles.row}>{el.Header}</th>
                        
                        ))

                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el,index)=>(
                        <tr key={index} className={Styles.row}>
                            { Object.values(el).map((value,index2)=>(
                               state[index2].hide && <td key={index2}>{value}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Table