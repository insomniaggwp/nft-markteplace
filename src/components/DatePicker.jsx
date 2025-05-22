
function DatePicker({ label, date, onChangeDate }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col gap-2 max-w-sm">
      <label htmlFor="schedule" className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="date"
        id="schedule"
        name="schedule"
        className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        min={today}
        value={date}
        onChange={onChangeDate}
      />
    </div>
  );
}

export default DatePicker;
