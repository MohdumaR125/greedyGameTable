import React, { useEffect, useState } from "react";
import {useMemo} from "react";
import { Columns } from "./Column";

const Table = (props)=>{
    const columns=useMemo(()=>Columns,[Columns])
    const {data}=props;
 
    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map((el,index)=>(
                            <th key={index}>{el.Header}</th>
                        
                        ))

                    }
                </tr>
            </thead>
            <tbody>
                {
                    Object.values(data).map((el,index)=>(
                        <tr key={index}>
                            {Object.values(el).map((value,index2)=>(
                                <td key={index2}>{value}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Table