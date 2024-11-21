import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import { ko } from "date-fns/locale";

interface Event {
  date: Date;
  title: string;
  time: string;
}

const upcomingEvents: Event[] = [
  { date: new Date(2024, 0, 16), title: "회의", time: "오전 9시 - 오후 12시" },
  { date: new Date(2024, 0, 21), title: "출장", time: "오전 11시 - 오후 5시" },
  { date: new Date(2024, 0, 26), title: "미팅", time: "오전 11시 - 오후 5시" },
];

interface CalendarProps {
  onSelectDate: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const monthFormat = "yyyy년 MM월";

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
    onSelectDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(today);
    setSelectedDate(today);
    onSelectDate(today);
  };

  const handleEventClick = (date: Date) => {
    setCurrentMonth(startOfMonth(date));
    onDateClick(date);
  };

  return (
    <div className=" min-h-screen flex flex-col items-center py-8">
      <div className="text-gray-800 text-2xl font-bold mb-4">캘린더</div>
      <div className="bg-white rounded-lg shadow-md p-6 w-80">
        <div className="flex items-center justify-around mb-4">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-200 text-gray-600"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-gray-800">
            {format(currentMonth, monthFormat, { locale: ko })}
          </h2>
          <button
            onClick={goToToday}
            className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            오늘
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-200 text-gray-600"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500 mb-2">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, idx) => {
            const dayEvents = upcomingEvents.filter((event) =>
              isSameDay(event.date, day)
            );
            return (
              <div
                key={idx}
                onClick={() => onDateClick(day)}
                className={`
                  p-2 text-center text-sm cursor-pointer rounded-lg relative
                  ${
                    !isSameMonth(day, monthStart)
                      ? "text-gray-400"
                      : "text-gray-700"
                  }
                  ${
                    isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : ""
                  }
                  ${isSameDay(day, new Date()) ? "border border-blue-500" : ""}
                  ${dayEvents.length > 0 ? "bg-blue-100" : ""}
                  hover:bg-gray-200
                `}
              >
                {format(day, dateFormat)}
                {dayEvents.length > 0 && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 w-80">
        <h3 className="text-gray-800 text-lg font-semibold mb-4">
          다가오는 일정
        </h3>
        <div className="flex flex-col gap-2">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center cursor-pointer hover:bg-gray-100"
              onClick={() => handleEventClick(event.date)}
            >
              <div>
                <div
                  className={`font-bold ${
                    index === 0
                      ? "text-blue-600"
                      : index === 1
                      ? "text-green-600"
                      : "text-purple-600"
                  }`}
                >
                  {format(event.date, "M월 d일 (EEE)", {
                    locale: ko,
                  }).toUpperCase()}
                </div>
                <div className="text-gray-700">{event.title}</div>
              </div>
              <div className="text-gray-500 text-sm">{event.time}</div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          + 일정 추가
        </button>
      </div>
    </div>
  );
};
