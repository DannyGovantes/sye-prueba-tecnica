import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const onChanged = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const resetState = () => {
    setFormState(initialState);
  };
  return {
    ...formState,
    formState,
    onChanged,
    resetState,
  };
};
