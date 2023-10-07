import {useState} from 'react';

interface CheckboxProps {
  textHtml: any[];
  id: string;
  setValue: (value: boolean) => void;
  requiredError?: string
}

export const Checkbox = ({setValue, textHtml, id, requiredError}: CheckboxProps) => {
  const [requiredErrorVisible, setRequiredErrorVisible] = useState<string>('');

  const validate = (value: boolean) => {
    setValue(value)
    if (!value && !!requiredError) {
      setRequiredErrorVisible(requiredError);
      return;
    }
    setRequiredErrorVisible('')
  }

  return (
    <div className="my-2">
      <div className="flex items-center cursor-pointer my-2">
        <input id={id} type="checkbox" onChange={(value) => validate(value.target.checked)}
               className="h-5 w-5 text-font-primary rounded-md ring-font-primary-placeholder bg-primary-transparent"/>
        <label htmlFor="privacy" className="text-xl ml-2 font-medium text-font-primary font-medium">{textHtml}</label>
      </div>
      {requiredErrorVisible && requiredError && <div className="text-error-red text-sm">{requiredErrorVisible}</div>}
    </div>
  );
}

export default Checkbox;