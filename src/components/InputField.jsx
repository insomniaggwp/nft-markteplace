export default function InputField({ label, id, type = "text", ...rest }) {

  const components = {
    text: "input",
    password: "input",
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
        {...rest}
        className="w-full px-4 py-2 border border-primary rounded-lg"
      />
    </div>
  );
}
