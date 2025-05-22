export default function InputField({ label, id, type = "text", value, onChange, placeholder }) {

  const components = {
    text: "input",
    textarea: "textarea",
  };

  const Component = components[type];


  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-subheadline-size text-primary mb-1">
        {label}
      </label>
      <Component
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-primary rounded-lg"
      />
    </div>
  );
}
