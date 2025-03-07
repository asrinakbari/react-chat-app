import { Controller, useFormContext } from "react-hook-form";
import RHFItemProps from "../../interfaces/RHFItemProps.tsx";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const RHFAutocomplete = (props: RHFItemProps) => {
  const { control, setValue } = useFormContext();
  const { name, label, helperText, ...other } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          onChange={(event, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          error={!!error}
          {...other}
          renderInput={(params) => (
            <TextField
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
              {...params}
            />
          )}
        />
      )}
    />
  );
};
export default RHFAutocomplete;
