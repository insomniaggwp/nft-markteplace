function Dropdown({ label, options, selected, onChangeSelected }) {

  return (
    <div className="flex flex-col gap-2 max-w-sm">
      <label htmlFor="options" className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id="options"
        name="options"
        className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selected}
        onChange={onChangeSelected}
      >
        {
          options.map((option) => 
            <option id={`option-${option.id}`} key={option.id} value={option.id}>{option.name} - {option.description}</option>  
          )
        }
      </select>
    </div>
  );
}

export default Dropdown;
