import React, { ChangeEvent } from 'react';

const useInputs = <T = Record<string, string | boolean>>(
  initialValues: T
): [
  T,
  (event: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<T>>,
  () => void
] => {
  const [values, setValues] = React.useState(initialValues);

  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'checkbox') return event.target.checked;

    return event.target.value;
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: getValue(event),
    });
  };

  const reset = React.useCallback(
    () => setValues(initialValues),
    [initialValues]
  );

  return [values, onChange, setValues, reset];
};
export default useInputs;
