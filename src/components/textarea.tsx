import {useState} from 'react';

interface TextareaProps {
  placeholder?: string;
  type?: string;
  label?: string;
  id: string;
  setValue: (value) => void;
  validationError?: string;
  requiredError?: string;
  rows: number;
}

export const Textarea = ({id, label, placeholder, setValue, validationError, requiredError, rows}: TextareaProps) => {
  const [requiredErrorVisible, setRequiredErrorVisible] = useState<string>('');

  const validate = (value: string | undefined) => {
    if (!!value) {
      setValue(value)
    }
    if (!value && !!requiredError) {
      setRequiredErrorVisible(requiredError);
      return;
    }
    setRequiredErrorVisible('')
  }

  return (
    <div className="my-2">
      <label htmlFor={id} className="block text-xl font-medium leading-8 text-font-primary font-medium">{label}</label>
      <div className="relative mt-2 rounded-md bg-primary-transparent">
      <textarea id={id} name={id} rows={rows}
                className="block w-full resize-none rounded-lg border-0 py-1 pl-4 pr-8 text-font-primary ring-1 ring-inset ring-font-primary-placeholder bg-primary-transparent placeholder:text-font-primary-placeholder focus:ring-2 focus:ring-inset focus:ring-font-primary sm:text-lg sm:leading-8 resize-none"
                placeholder={placeholder}
                onChange={(value) => validate(value.target.value)}/>
        {validationError && !requiredErrorVisible && <div className="text-error-red text-sm my-2">{validationError}</div>}
        {requiredErrorVisible && requiredError && <div className="text-error-red text-sm my-2">{requiredErrorVisible}</div>}
      </div>
    </div>
  )
}

export default Textarea;