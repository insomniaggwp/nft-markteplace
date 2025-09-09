export default function Button({
  type = 'button',
  variant = 'primary',
  children,
  onClick,
  disabled = false,
}) {
  const baseStyle =
    'w-full px-4 py-2 rounded text-button-size text-button-line focus:outline-none cursor-pointer focus:ring-2 transition';

  const variantStyle = {
    primary: 'bg-primary text-neutral hover:bg-primary-darken focus:ring-info',
    secondary:
      'bg-secondary text-neutral hover:bg-secondary-darken focus:ring-secondary',
    outline:
      'border border-info text-info hover:bg-info-darken focus:ring-blue-500',
    danger: 'bg-danger text-neutral hover:bg-danger-darken focus:ring-red-500',
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
