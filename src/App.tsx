import React, { useState } from "react";
import { Calendar } from "./components/Calender";

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-row justify-center items-center w-full h-full bg-gray-100">
      <Calendar onSelectDate={handleSelectDate} />
      {selectedDate && (
        <p className="mt-4 text-center text-lg text-gray-700"></p>
      )}
    </div>
  );
};

export default App;
