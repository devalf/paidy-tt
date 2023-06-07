import React from 'react';
import cn from 'classnames';

type InputFieldProps = {
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  error,
}) => {
  const isCheckbox = type === 'checkbox';

  return (
    <div className={cn('form-group', { 'form-group-checkbox': isCheckbox })}>
      {label && (
        <label htmlFor='input-field' className={'form-control-label'}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        className={cn('form-control', { 'form-control-error': error })}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className={'form-control-error-message'}>{error}</span>}
    </div>
  );
};
