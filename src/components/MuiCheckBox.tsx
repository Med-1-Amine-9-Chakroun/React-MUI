import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function MuiCheckBox() {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (skills.includes(value)) {
      setSkills(skills.filter((s) => s !== value));
    } else {
      setSkills([...skills, value]);
    }
  };
  console.log(skills);
  return (
    <Box>
      <Box>
        <FormControlLabel
          sx={{ color: "black" }}
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={acceptTnC}
              onChange={() => {
                setAcceptTnC(!acceptTnC);
              }}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={() => {
            setAcceptTnC(!acceptTnC);
          }}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row sx={{ color: "balck" }}>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />

            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />

            <FormControlLabel
              label="Js"
              control={
                <Checkbox
                  value={"js"}
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
