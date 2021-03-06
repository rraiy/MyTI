/* eslint-disable prefer-template */
import { useState } from 'react';

const dayNamesArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const monthNamesArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const useCalendar = (daysName = dayNamesArr, monthNames = monthNamesArr) => {
  const today = new Date();
  const todayFormat = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(
    2,
    '0',
  )}-${`${today.getDate()}`.padStart(2, '0')}`;

  const daysInWeek = [0, 1, 2, 3, 4, 5, 6];

  const [selectedDate, setSelectedDate] = useState(today);

  const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
  const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  const LastDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
  const totalDayCountInMonth = LastDayInMonth.getDate();
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;

  let prevMonthStartingPoint =
    prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;

  const rows = 6;
  const cols = 7;
  const calendarRows = {};

  for (let i = 1; i < rows + 1; i += 1) {
    for (let j = 1; j < cols + 1; j += 1) {
      if (!calendarRows[i]) {
        calendarRows[i] = [];
      }
      // `${today.getFullYear()}-`+`${(today.getMonth()+1)}`.padStart(2, "0")+'-'+`${today.getDate()}`.padStart(2, "0")
      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: `in-prev-month `,
              date:
                `${
                  selectedDate.getMonth() === 0
                    ? selectedDate.getFullYear() - 1
                    : selectedDate.getFullYear()
                }-` +
                `${selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()}`.padStart(2, '0') +
                '-' +
                `${prevMonthStartingPoint}`.padStart(2, '0'),
              value: prevMonthStartingPoint,
            },
          ];
          prevMonthStartingPoint += 1;
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: 'in-now-month',
              date:
                `${selectedDate.getFullYear()}-` +
                `${selectedDate.getMonth() + 1}`.padStart(2, '0') +
                '-' +
                `${currentMonthCounter}`.padStart(2, '0'),
              value: currentMonthCounter,
            },
          ];
          currentMonthCounter += 1;
        }
      } else if (i > 1 && currentMonthCounter < totalDayCountInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: 'in-now-month',
            date:
              `${selectedDate.getFullYear()}-` +
              `${selectedDate.getMonth() + 1}`.padStart(2, '0') +
              '-' +
              `${currentMonthCounter}`.padStart(2, '0'),
            value: currentMonthCounter,
          },
        ];
        currentMonthCounter += 1;
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: 'in-next-month',
            date:
              `${
                selectedDate.getMonth() + 2 === 13
                  ? selectedDate.getFullYear() + 1
                  : selectedDate.getFullYear()
              }-` +
              `${selectedDate.getMonth() + 2 === 13 ? 1 : selectedDate.getMonth() + 2}`.padStart(
                2,
                '0',
              ) +
              '-' +
              `${nextMonthCounter}`.padStart(2, '0'),
            value: nextMonthCounter,
          },
        ];
        nextMonthCounter += 1;
      }
    }
  }

  const getPrevMonth = () => {
    setSelectedDate((prevValue) => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1));
  };

  const getNextMonth = () => {
    setSelectedDate((prevValue) => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1));
  };

  const getToday = () => {
    setSelectedDate(today);
  };

  return {
    daysName,
    monthNames,
    todayFormat,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
    getToday,
  };
};

export default useCalendar;
