import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarPickerProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  datesWithEntries: string[];
  onClose: () => void;
}

export function CalendarPicker({ selectedDate, onSelectDate, datesWithEntries, onClose }: CalendarPickerProps) {
  const selected = new Date(selectedDate);
  const [currentMonth, setCurrentMonth] = useState(new Date(selected.getFullYear(), selected.getMonth(), 1));

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const formatDateString = (year: number, month: number, day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dateStr;
  };

  const hasEntry = (year: number, month: number, day: number) => {
    const dateStr = formatDateString(year, month, day);
    return datesWithEntries.includes(dateStr);
  };

  const isSelected = (year: number, month: number, day: number) => {
    const dateStr = formatDateString(year, month, day);
    return dateStr === selectedDate;
  };

  const isToday = (year: number, month: number, day: number) => {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const dateStr = formatDateString(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onSelectDate(dateStr);
    onClose();
  };

  const days = getDaysInMonth(currentMonth);
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  return (
    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-20 min-w-[320px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <span className="text-sm font-medium">
          {monthNames[month]} {year}
        </span>
        <button
          onClick={handleNextMonth}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-xs text-gray-500 text-center py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }

          const selected = isSelected(year, month, day);
          const today = isToday(year, month, day);
          const entry = hasEntry(year, month, day);

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={`aspect-square rounded-[0px] text-sm flex flex-col items-center justify-center relative transition-colors ${
                selected
                  ? 'bg-black text-white'
                  : today
                  ? 'text-gray-900 border border-[#FE8F7F] hover:bg-gray-50'
                  : entry
                  ? 'text-gray-700 hover:bg-gray-50 border border-[#FE8F7F]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{day}</span>
              {entry && !selected && (
                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[#FE8F7F]" />
              )}
              {entry && selected && (
                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-white" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}