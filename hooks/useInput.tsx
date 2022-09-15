import { ChangeEvent, FocusEvent, useState } from "react";

type ReactChangeEvent = ChangeEvent<HTMLInputElement>;

type InputDefinition = {
  value: string;
  hasError: boolean;
  inputChangeHandler: (e: ReactChangeEvent) => void;
  inputBlurHandler: () => void;
  reset: () => void;
  isValid: boolean;
};

const useInput = (validateValue: (value: any) => boolean): InputDefinition => {
  
  //Q6.1 - 3/5
  // hasError and isValid can both be derived variables
  // you did not use the Validate value to check  if the value is Valid

  //Expected :
  //let isValid = validateValue(value)
  //From the Question 5 we know that an input is invalid (has error)
  //when the value is invalid and has been touched
  //let hasError = !isValid && isTouched
  
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [isTouched, setIsTouched] = useState(false);


  //Q6.2 - 2/2
  const inputChangeHandler = (e: ReactChangeEvent) => {
    // I added this but no where does it say to add any logic inside this function
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    // I added the function but no where does it state to add any logic to get a desired outcome?
    setIsTouched(true);
  };

  //Q6.3 - 2/2 
  const reset = () => {
    setValue("");
    setHasError(false);
    setIsValid(false);
  };

  return {
    value: value,
    hasError: hasError,
    inputChangeHandler: inputChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
    isValid: isValid,
  };
};

export default useInput;
