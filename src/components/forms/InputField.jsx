import { useFormikContext } from 'formik';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const InputField = ({ name, placeholder, type = 'text', className, disabled = false, ...rest }) => {
  const { errors, values, touched, handleBlur, handleChange } = useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="col-span-1">
      {type === 'password' ? (
        <div className="border rounded-md w-[100%] bg-transparent flex items-center gap-1 pe-1">
          <input
            value={value}
            placeholder={placeholder}
            onChange={handleChange(name)}
            onBlur={handleBlur(name)}
            type={showPassword ? 'text' : 'password'}
            disabled={disabled}
            className="border-0 w-[90%] bg-transparent p-3 text-[14px] font-[400]"
            autoComplete="off"
            {...rest}
          />
          <FaEye size={17} onClick={togglePassword} />
        </div>
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleChange(name)}
          onBlur={handleBlur(name)}
          type={type}
          disabled={disabled}
          className="border rounded-md w-[100%] bg-transparent p-3 text-[14px] font-[400]"
          autoComplete="off"
          {...rest}
        />
      )}
      {error && isInputTouched ? (
        <div className="text-red-500 text-[12px] font-400 lowercase">{error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
