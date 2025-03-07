import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import RHFItemProps from "../../../interface/RHFItemProps.tsx";
import { TextField } from "@mui/material";

export default function RHFTextField(props: RHFItemProps) {
  const { name, helperText, ...other } = props;

  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  );
}
