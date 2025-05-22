export default function InputField({ label, id, type = "text", value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-info-500 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
