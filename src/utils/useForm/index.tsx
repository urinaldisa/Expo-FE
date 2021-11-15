import { useState } from "react";

const useForm = (initialValue: any) => {
  const [form, setForm] = useState(initialValue);
  return [
    form,
    (formType: string, formValue: any) => {
      if (formType === "reset") {
        return setForm(initialValue);
      }
      return setForm({ ...form, [formType]: formValue });
    },
  ];
};

export default useForm;
