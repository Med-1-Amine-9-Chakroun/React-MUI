import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export default function MuiRadioButton() {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel>Years Of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience-group-label"
          sx={{ color: "red" }}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
          <FormControlLabel control={<Radio />} label="6-10" value={"6-10"} />
        </RadioGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
    </Box>
  );
}
