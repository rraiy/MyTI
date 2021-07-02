import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

const Calendar = () =>{
    const [current, setCurrent] = useState(new Date()); // 7.2 看起來並不需要使用state 因為沒必要change
    const [cal, setCal] = useState([]); 
    
    const calData =  () => {
        
        let firstCurrentDay = new Date(current.getFullYear(), current.getMonth(), 1); // 7.1

        let firstCalDay = new Date(firstCurrentDay.getFullYear(), firstCurrentDay.getMonth(), 1);
        firstCalDay.setDate(firstCalDay.getDate()-firstCurrentDay.getDay());  // 6.27
        
        let areaDates = [];
        let allDates = [];

        const getOneFrameDates = (begin) => {
            areaDates.push(begin.getDate());
            begin.setDate(begin.getDate()+1);
        }

        // pre month (it means before current month the last week)
        while(firstCalDay<firstCurrentDay){
            getOneFrameDates(firstCalDay);
        }
        
        allDates.push(areaDates);
        console.log(allDates)

        // current month
        while(firstCurrentDay.getMonth() === current.getMonth()){
            getOneFrameDates(firstCurrentDay)
        }
        // console.log(areaDates)
        allDates.push(areaDates);
        console.log(allDates)

        // next month (it means after current month the last week)
        while(firstCurrentDay.getDay()>0){
            getOneFrameDates(firstCurrentDay)
        }
        // console.log(areaDates)
        allDates.push(areaDates);
        console.log(allDates, allDates.length)
    }
    
    calData();

    return(
        <div>
            <h3>2021 / 0</h3>
            <div>123456...</div>
            <button>上個月</button>
            <button>下個月</button>
        </div>
    )
}

export default Calendar;