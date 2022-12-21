import React, { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };
  const onResetFormState = () => {
    setFormState(initialForm);
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetFormState,
  };
};
