import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Table = (props)=>{
    const {data}=props;
    const state=useSelector(state=>state.Columns)
    console.log(state)
 
    return (
        <table>
            <thead>
                <tr>
                    {
                       state.map((el,index)=>(
                          el.hide &&  <th key={index}>{el.Header}</th>
                        
                        ))

                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el,index)=>(
                        <tr key={index}>
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