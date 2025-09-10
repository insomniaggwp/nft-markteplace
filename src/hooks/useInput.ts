import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState<string>(defaultValue);

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  return [value, handleValueChange, setValue] as const;
}

export default useInput;
