import { useState } from "react";
import DatePicker from "../components/DatePicker"
import Table from "../components/Table"

const TablePage = ()=>{
    const [data,setData] = useState([]);
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");

    const start = (e)=>{
        setStartDate(e.target.value)
    }
    const end = (e)=>{
        setEndDate(e.target.value)
        console.log(startDate,endDate)
        getData(startDate,endDate)
    }
   
    const getData = async(startdate,enddate)=>{
        const res = await fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${startdate}&endDate=${enddate}`);
        
        const data1 = await res.json();
        
        data1.data.forEach((obj)=>{
            return Object.assign(obj,{fill_rate:((obj.requests/obj.responses)*100).toFixed(2)+"%",ctr:((obj.clicks/obj.impressions)*100).toFixed(2)+"%",revenue:obj.revenue.toFixed(2),date:obj.date.substring(0,10)})
           
        })
        console.log(data1.data)
        setData(data1.data);
    }

return(
    <>
    <DatePicker start={start} end = {end} />
    <Table data={data}/>
    </>
)
}
export default TablePage