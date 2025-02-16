import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export default function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onClick={() => {
              setChecked(!checked);
            }}
            color="success"
          />
        }
      />
    </Box>
  );
}
