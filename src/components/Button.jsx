export default function Button({
  type = 'button',
  variant = 'primary',
  children,
  onClick = () => {},
  disabled = false,
  className = ''
}) {
  const baseStyle =
    'px-4 py-2 bg-primary-purple hover:bg-primary rounded rounded-3xl text-normal-size focus:outline-none cursor-pointer focus:ring-2 transition border border-primary-purple flex justify-evenly items-center';

  const variantStyle = {
    primary: ' text-neutral h-[72px]',
    secondary: 'text-neutral h-[60px]',
    tertiary: 'h-[46px]'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
