import React from 'react';

type InputFieldProps = {
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className='form-group'>
      {label && <label htmlFor='input-field'>{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className='form-control'
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
