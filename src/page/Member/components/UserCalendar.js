import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import { db, storage } from '../../../firebase/firestore';
import useCalendar from '../../../hooks/useCalendar';
import {
  UserCalendarWrap,
  DayUl,
  AllRowsUl,
  RowsWrap,
  SelectMonthDiv,
  MonthBtn,
  TodayBtn,
  EventDiv,
  EventPopupDiv,
} from './css/UserCalendarSty';
import RemoveI from '../../../images/icon/remove.png';

const Calendar = ({ userTour, isSigned, userToken }) => {
  const {
    daysName,
    monthNames,
    todayFormat,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
    getToday,
  } = useCalendar();

  const [isLoading, setLoading] = useState(true);
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

  // const dateClickHandler = (date) => {
  //   console.log(date);
  // };
  const [eventPopup, setEventPopup] = useState(false);

  // deal get one tour's all dates
  const getAllTourDates = (s, e) => {
    const tourDatesArr = [];
    for (let dt = new Date(s); dt <= new Date(e); dt.setDate(dt.getDate() + 1)) {
      tourDatesArr.push(new Date(dt));
    }
    return tourDatesArr.map((item) => {
      return item.toISOString().slice(0, 10);
    });
  };

  const handleEventPopup = (title, start, end) => {
    setEventPopup({
      tourTitle: title,
      tourStart: start,
      tourEnd: end,
    });
  };

  const removeFavoriteTour = (tourName, start, end) => {
    db.collection('member')
      .doc(userToken)
      .get()
      .then((res) => res.data().user_tour)
      .then((hadTours) => hadTours.filter((item) => item.tourTitle === tourName))
      .then((filterResult) => {
        if (filterResult.length !== 0) {
          db.collection('member')
            .doc(userToken)
            .update({
              user_tour: firebase.firestore.FieldValue.arrayRemove({
                tourTitle: tourName,
                tourStart: start,
                tourEnd: end,
              }),
            });
        }
      })
      .then(() => setEventPopup(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (userTour) {
      const datas2 = userTour.map((tour) => {
        return {
          title: tour.tourTitle,
          tour_date: getAllTourDates(tour.tourStart, tour.tourEnd),
          tourStart: tour.tourStart,
          tourEnd: tour.tourEnd,
        };
      });

      setTourDatas(datas2);
      setLoading(false);
    }
  }, [userTour]);

  return (
    <UserCalendarWrap>
      {!isSigned ? <div> Please sign in first. </div> : null}
      {isLoading ? (
        <div> Loading.. </div>
      ) : (
        <>
          <SelectMonthDiv>
            <MonthBtn onClick={getPrevMonth}>Prev</MonthBtn>
            <TodayBtn onClick={getToday}>Today</TodayBtn>
            <MonthBtn onClick={getNextMonth}>Next</MonthBtn>
            <p>{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
          </SelectMonthDiv>

          <DayUl>
            {daysName.map((day) => (
              <li key={day}>{day}</li>
            ))}
          </DayUl>

          <AllRowsUl>
            {Object.values(calendarRows).map((cols) => {
              // first map take a whole week data[{},{},....{}]
              return (
                <RowsWrap key={cols[0].date}>
                  {cols.map((col) =>
                    col.date === todayFormat ? (
                      <li key={col.date} className={`${col.classes} today ${col.date}`}>
                        <p>{col.value}</p>
                        {tourDatas
                          ? tourDatas
                              .filter((tour) => {
                                return tour.tour_date.includes(col.date);
                              })
                              .map((item) => (
                                <EventDiv
                                  key={item.title + item.date}
                                  // onClick={setEventPopup(true)}
                                >
                                  {item.title}
                                </EventDiv>
                              ))
                          : null}
                      </li>
                    ) : (
                      <li key={col.date} className={`${col.classes} ${col.date}`}>
                        <p>{col.value}</p>
                        {tourDatas
                          ? tourDatas
                              .filter((tour) => {
                                return tour.tour_date.includes(col.date);
                              })
                              .map((item) => (
                                <EventDiv
                                  key={item.title + item.date}
                                  onClick={() =>
                                    handleEventPopup(item.title, item.tourStart, item.tourEnd)
                                  }
                                >
                                  {item.title}
                                </EventDiv>
                              ))
                          : null}
                      </li>
                    ),
                  )}
                </RowsWrap>
              );
            })}
            {!eventPopup ? null : (
              <EventPopupDiv>
                <img src={RemoveI} alt="" onClick={() => setEventPopup(false)} />
                <p>{eventPopup.tourTitle}</p>
                <p>
                  {eventPopup.tourStart} ~ {eventPopup.tourEnd}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    removeFavoriteTour(
                      eventPopup.tourTitle,
                      eventPopup.tourStart,
                      eventPopup.tourEnd,
                    )
                  }
                >
                  Delete This Tour
                </button>
                <Link to="/tournaments">
                  <button type="button">Go More Tournaments</button>
                </Link>
              </EventPopupDiv>
            )}
          </AllRowsUl>
        </>
      )}
    </UserCalendarWrap>
  );
};

export default Calendar;
