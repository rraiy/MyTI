import React, {useState, useEffect} from 'react';
import {db, storage} from '../../../firebase/firestore';
import useCalendar from '../../../hooks/useCalendar';
import {UserCalendarWrap, DayUl, AllRowsUl, RowsWrap, SelectMonthDiv, MonthBtn, TodayBtn} from './css/UserCalendarSty';

const Calendar = ({userToken, userTour}) => {
    const { daysName,
        monthNames,
        todayFormat,
        calendarRows,
        selectedDate,
        getPrevMonth,
        getNextMonth} = useCalendar();

        // tourEnd: "2021-06-25"
        // tourStart: "2021-06-20"
        // tourTitle: "ESL One"
    const [isLoading, setLoading] = useState(true);
    const [tours, setTours] = useState(userTour);
    const [tourDatas, setTourDatas] = useState(null);

    


    useEffect(()=>{

        if(tours){ // bug if direct to the component cant render tour event
            
            const datas = tours.map(tour=>{
                return {
                    title:tour.tourTitle,
                    date:tour.tourStart
                }
            })
            
            setTourDatas(datas);
            setLoading(false)
        }
        
    },[])



    
        if(isLoading){
            return <div> Loading</div>
        }
    
    return(
        <UserCalendarWrap>
            <SelectMonthDiv>
                <MonthBtn onClick={getPrevMonth}>Prev</MonthBtn>
                <TodayBtn>Today</TodayBtn>
                <MonthBtn onClick={getNextMonth}>Next</MonthBtn>
                <p>{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
            </SelectMonthDiv>
            <DayUl>
                {daysName.map(day=>(
                    <li key={day}>{day}</li>
                ))}
            </DayUl>
                
            <AllRowsUl>
                
                {
                    
                    Object.values(calendarRows).map(cols => {  // first map take a whole week data[{},{},....{}]
                        return <RowsWrap key={cols[0].date}>
                            {
                                cols.map(col => (
                                    col.date === todayFormat ?
                                    <li key={col.date} className={`${col.classes} today ${col.date}`} onClick={()=>dateClickHandler(col.date)}>
                                        <p>{col.value}</p>
                                        {   tourDatas ?
                                            tourDatas.filter(e => col.date === e.date).map((x)=>(
                                                <div style={{background:'pink'}}>{x.title}</div>
                                            ))
                                            :null
                                        }
                                    </li>
                                    : <li key={col.date} className={`${col.classes} ${col.date}`} onClick={()=>dateClickHandler(col.date)}>
                                    <p>{col.value}</p>
                                    {
                                        tourDatas?
                                        tourDatas.filter(e => col.date === e.date).map((x)=>(
                                            <div style={{background:'pink'}}>{x.title}</div>
                                        ))
                                        :null
                                    }
                                    </li>
                                ))
                            }
                        </RowsWrap>
                    })
                }
                
                
            </AllRowsUl>
            
            
        </UserCalendarWrap>
    )
}

export default Calendar;