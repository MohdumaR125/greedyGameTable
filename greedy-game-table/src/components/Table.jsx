import React, { useEffect, useState } from "react";
import {useMemo} from "react";
import { Columns } from "./Column";

const Table = ()=>{
    const [data,setData] = useState([]);
    const columns=useMemo(()=>Columns,[Columns])
    const getData = async()=>{
        const res = await fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03`);
        
        const data1 = await res.json();
        console.log(data1)
       const data2= data1.data.forEach((obj)=>{
            
            return ({...obj,fill_rate:(obj.requests/obj.response)*100,ctr:(obj.clicks/obj.impressions)*100})
           
        })
        console.log(data1.data)
        setData(data1.data);
    
        
    
    }
    // const data=useMemo(()=>{getData()},[])
    // console.log(columns);
    // console.log(data);

    useEffect(()=>{
        getData();
    },[])
   

 

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