import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export default function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        fullWidth
        value={countries}
        onChange={handleChange}
        SelectProps={{ multiple: true }}
        size="small"
        helperText="Select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="TN">Tunisia</MenuItem>
      </TextField>
    </Box>
  );
}
