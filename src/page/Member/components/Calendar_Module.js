import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

const CalUL = styled.div`
    border:2px solid yellow;
    border-radius: 5px;
    width:700px;

    .grey{
        color:grey;
    }
`

const Calendar = () =>{
    const [current, setCurrent] = useState(new Date());
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

    let preMonthDays = cal[0];
    let monthDays = cal[1];
    let nextMonthDays = cal[2];

    // 從這開始
    

    

    
    useEffect(()=>{
        calData();
        console.log(cal[0])
    },[current])
    

    return(
        <div>
            <h3>{yearMonth}</h3>
            <CalUL>
                {
                    (cal === undefined)  ? preMonthDays.map(days => 
                        (
                            <li className="grey">{days}</li>
                        )):<li>no</li> 
                }
            </CalUL>
            <button onClick={getPreMonth}>上個月</button>
            <button onClick={getNextMonth}>下個月</button>
        </div>
    )
}

export default Calendar;