import {useState} from 'react';

interface InputProps {
  placeholder?: string;
  type?: string;
  label?: string;
  id: string;
  pattern?: string;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
  minLength?: number;
  maxLength?: number;
  setValue: (value: any) => void;
  validationError?: string;
  requiredError?: string;
}

export const Input = ({id, label, type, placeholder, pattern, inputMode, minLength, maxLength, setValue, validationError, requiredError}: InputProps) => {
  const [requiredErrorVisible, setRequiredErrorVisible] = useState<string>('');

  const validate = (value: string | undefined) => {
    const trimmedValue = value?.trim()
    if (!!trimmedValue) {
      setValue(trimmedValue)
    }
    if (!trimmedValue && !!requiredError) {
      setRequiredErrorVisible(requiredError);
      return;
    }
    setRequiredErrorVisible('')
  }

  return (
    <div className="my-2">
      {label && <label htmlFor={id}
             className="block text-xl font-medium leading-8 text-font-primary font-medium">{label}</label> }
      <div className="relative mt-2 rounded-md bg-primary-transparent">
        <input type={type} name={id} id={id}
               className="block w-full rounded-lg border-0 py-1 pl-4 pr-8 text-font-primary ring-1 ring-inset ring-font-primary-placeholder bg-primary-transparent placeholder:text-font-primary-placeholder focus:ring-2 focus:ring-inset focus:ring-font-primary sm:text-lg sm:leading-8"
               placeholder={placeholder} pattern={pattern} inputMode={inputMode} minLength={minLength} maxLength={maxLength} onChange={(value) => validate(value.target.value)}/>
        {validationError && !requiredErrorVisible && <div className="text-error-red text-sm my-2">{validationError}</div>}
        {requiredErrorVisible && requiredError && <div className="text-error-red text-sm my-2">{requiredErrorVisible}</div>}
      </div>
    </div>
  )
}

export default Input;