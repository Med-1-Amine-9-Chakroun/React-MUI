import { Stack, TextField } from "@mui/material";

export default function MuiTextField() {
  return (
    <Stack spacing={4}>
      <Stack direction={"column"} spacing={2}>
        <TextField label="Name" variant="outlined" size="medium" />
        <TextField label="Name" variant="standard" size="small" />
        <TextField label="Name" variant="filled" />
      </Stack>
    </Stack>
  );
}
