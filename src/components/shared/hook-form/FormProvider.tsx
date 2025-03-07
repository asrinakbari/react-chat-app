import { FormProvider as Form } from "react-hook-form";
import FormProviderProps from "../../interfaces/formProviderProps.tsx";
import React from "react";

const FormProvider = (props: FormProviderProps) => {
  const { onSubmit, children, ...methods } = props;
  return (
    <Form {...methods.methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;
