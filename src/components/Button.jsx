export default function Button({ type = "button", variant = "primary", children, onClick, disabled = false }) {
  const baseStyle =
    "w-full px-4 py-2 rounded text-headline-size text-headline-line focus:outline-none focus:ring-2 transition";

  const variantStyle = {
    primary: "bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
