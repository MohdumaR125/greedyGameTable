import { useState } from "react";
import DatePicker from "../components/DatePicker";
import Settings from "../components/Settings";
import Table from "../components/Table";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handlehide } from "../Redux/action";

const TablePage = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const state = useSelector((state) => state.Columns);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const enddate = searchParams.get("end");
    const startdate = searchParams.get("start");

    //handling searchParam for date
    if (startdate && enddate) {
      setStartDate(startdate);
      setEndDate(enddate);
      console.log("setdate", startdate, enddate);
      getData(startdate, enddate);
    }

    //handling search param for filter
    state.forEach((el) => {
      if (searchParams.has(el.accessor)) {
        const payload = Object.assign({ ...el, hide: !el.hide });
        const action = handlehide(payload);
        dispatch(action);
      }
    });
  }, []);

  //getting start date and end date
  const start = (e) => {
    setStartDate(e.target.value);
  };
  const end = (e) => {
    setEndDate(e.target.value);
  };
  const handleEnter = () => {
    getData(startDate, endDate);
  };

  // after date getting data related to it
  const getData = async (s, e) => {
    const res = await fetch(
      `http://go-dev.greedygame.com/v3/dummy/report?startDate=${s}&endDate=${e}`
    );

    const data1 = await res.json();

    data1.data.forEach((obj) => {
      return Object.assign(obj, {
        fill_rate: ((obj.requests / obj.responses) * 100).toFixed(2) + "%",
        ctr: ((obj.clicks / obj.impressions) * 100).toFixed(2) + "%",
        revenue: obj.revenue.toFixed(2),
        date: obj.date.substring(0, 10),
      });
    });
    searchParams.set("end", e);
    searchParams.set("start", s);
    setSearchParams(searchParams);

    setData(data1.data);
  };

  return (
    <>
      <DatePicker start={start} end={end} handleEnter={handleEnter} />
      <Settings searchParams={searchParams} setSearchParams={setSearchParams} />
      <Table data={data} />
    </>
  );
};
export default TablePage;
