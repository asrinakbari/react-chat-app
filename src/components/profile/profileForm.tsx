import { Alert, Box, Button, Stack } from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../shared/hook-form/FormProvider.tsx";
import RHFTextField from "../shared/hook-form/RHFTextField.tsx";
const ProfileForm = () => {
  const defaultValue = {
    name: "",
    about: "",
  };
  const profileFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
  });

  const methods = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(profileFormSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      reset();
      setError("afterSubmit", {
        ...errors,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} py={3}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <RHFTextField
            name="name"
            label="Name"
            helperText={"This name is visible to your contacts"}
          />
          <RHFTextField
            name="about"
            label="About"
            multiline
            label="About"
            rows={3}
          />
        </Stack>

        <Box>
          <Button
            sx={{ float: "right", textTransform: "none" }}
            color="primary"
            size="large"
            type="submit"
            variant="outlined"
          >
            Save
          </Button>
        </Box>
      </Stack>
    </FormProvider>
  );
};
export default ProfileForm;
