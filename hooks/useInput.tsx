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
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [isTouched, setIsTouched] = useState(false);

  const inputChangeHandler = (e: ReactChangeEvent) => {
    // I added this but no where does it say to add any logic inside this function
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    // I added the function but no where does it state to add any logic to get a desired outcome?
    setIsTouched(true);
  };

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
