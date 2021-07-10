import React, {useState, useEffect} from 'react';
import {db, storage} from '../../../firebase/firestore';
import useCalendar from '../../../hooks/useCalendar';
import {UserCalendarWrap, DayUl, AllRowsUl, RowsWrap, SelectMonthDiv, MonthBtn, TodayBtn, EventDiv} from './css/UserCalendarSty';

const Calendar = ({userToken, userTour, isSigned}) => {
    const { daysName,
        monthNames,
        todayFormat,
        calendarRows,
        selectedDate,
        getPrevMonth,
        getNextMonth,
        getToday} = useCalendar();

    const [isLoading, setLoading] = useState(true);
    const [tours, setTours] = useState(userTour);
    /* {
        tourEnd: "2021-06-25"
        tourStart: "2021-06-20"
        tourTitle: "ESL One"
    } */
    const [tourDatas, setTourDatas] = useState(null);
    /* {
        title:'esl one',
        tour_date:["2021-06-18","2021-06-20"]
    } */
    
    const dateClickHandler = (date) => {
        console.log(date)
    }

    // deal get one tour's all dates
    const getAllTourDates = (s,e) => {
        let tourDatesArr = []
        for(let dt=new Date(s); dt<=new Date(e) ; dt.setDate(dt.getDate()+1)){
            tourDatesArr.push(new Date(dt))
        }
        return tourDatesArr.map(item => {
            return item.toISOString().slice(0,10)
        })
    }

    useEffect(()=>{
        if(tours){
            const datas2 = tours.map(tour=>{
                return {
                    title:tour.tourTitle,
                    tour_date:getAllTourDates(tour.tourStart, tour.tourEnd)
                }
            })
            
            setTourDatas(datas2);
            setLoading(false);
        }

        
    },[])


        
    
    return(
        <UserCalendarWrap>
            {
                !isSigned ?
                <div> Loading~~~~ </div>
                
            :<>
            <SelectMonthDiv>
                <MonthBtn onClick={getPrevMonth}>Prev</MonthBtn>
                <TodayBtn onClick={getToday}>Today</TodayBtn>
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
                                        {   
                                            tourDatas ?
                                            tourDatas.filter(tour => {
                                                return tour.tour_date.includes(col.date)
                                            }).map(item=>(<EventDiv >{item.title}</EventDiv>))
                                            :null
                                        }
                                    </li>
                                    :<li key={col.date} className={`${col.classes} ${col.date}`} onClick={()=>dateClickHandler(col.date)}>
                                    <p>{col.value}</p>
                                    {
                                        tourDatas ?
                                        tourDatas.filter(tour => {
                                            return tour.tour_date.includes(col.date)
                                        }).map(item=>(<EventDiv >{item.title}</EventDiv>))
                                        :null
                                    }
                                    </li>
                                ))
                            }
                        </RowsWrap>
                    })
                }
                
            </AllRowsUl>
            </>
        }
        </UserCalendarWrap>
    
    )
}

export default Calendar;