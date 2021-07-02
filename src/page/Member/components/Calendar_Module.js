import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

const Calendar = () =>{
    const [current, setCurrent] = useState(new Date()); // 7.2 看起來並不需要使用state 因為沒必要change
    const [cal, setCal] = useState([]); 

    const yearMonth = current.getFullYear()+'年 '+ (current.getMonth()+1) +'月';
    
    const calData =  () => {
        
        let firstCurrentDay = new Date(current.getFullYear(), current.getMonth(), 1); // 7.1
        
        let firstCalDay = new Date(firstCurrentDay.getFullYear(), firstCurrentDay.getMonth(), 1);
        firstCalDay.setDate(firstCalDay.getDate()-firstCurrentDay.getDay());  // 6.27
        
        let preDays=[];
        let nextDays=[];
        let nowDays=[];
        let allDates=[];

        const getOneFrameDates = (begin,arr) => {
            arr.push(begin.getDate());
            begin.setDate(begin.getDate()+1);
        }

        // pre month (it means before current month the last week)
        while(firstCalDay<firstCurrentDay){
            getOneFrameDates(firstCalDay, preDays);
        }
        allDates.push(preDays)
        
        // current month
        while(firstCurrentDay.getMonth() === current.getMonth()){
            getOneFrameDates(firstCurrentDay, nowDays)
        }
        allDates.push(nowDays)

        // next month (it means after current month the final week)
        while(firstCurrentDay.getDay()>0){
            getOneFrameDates(firstCurrentDay, nextDays)
        }
        allDates.push(nextDays);

        setCal(allDates);
    }

    const getPreMonth = () => {
        setCurrent(new Date(current.getFullYear(), current.getMonth() - 1));
    }

    const getNextMonth = () => {
        setCurrent(new Date(current.getFullYear(), current.getMonth() + 1));
    }
    
    useEffect(()=>{
        calData();

    },[current])

    
    

    return(
        <div>
            <h3>{yearMonth}</h3>
            <div>{cal}</div>
            <button onClick={getPreMonth}>上個月</button>
            <button onClick={getNextMonth}>下個月</button>
        </div>
    )
}

export default Calendar;