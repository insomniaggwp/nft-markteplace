import React from 'react';

type BaseProps = {
  label?: string;
  id: string;
  className?: string;
};

type InputProps = BaseProps & {
  type?: 'text' | 'password' | 'email';
} & React.InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = BaseProps & {
  type: 'textarea';
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type InputFieldProps = InputProps | TextareaProps;

export default function InputField({
  label = '',
  id,
  type = 'text',
  ...rest
}: InputFieldProps) {
  const components = {
    text: 'input',
    password: 'input',
    email: 'input',
    textarea: 'textarea',
  } as const;

  const Component = components[type];

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-subheadline-size text-primary mb-1"
      >
        {label}
      </label>
      <Component
        id={id}
        {...rest}
        // hanya kasih type kalau bukan textarea
        {...(Component === 'input' ? { type } : {})}
        className={`w-full px-4 py-2 border border-primary rounded-lg bg-neutral text-primary text-normal-size ${'className' in rest ? rest.className : ''}`}
      />
    </div>
  );
}
