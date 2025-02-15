import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

import SendIcon from "@mui/icons-material/Send";
export default function MuiTypography() {
  return (
    <Stack spacing={4} direction={"row"}>
      <Stack spacing={2} direction={"column"}>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction={"column"}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
        <Stack spacing={2} direction={"row"}>
          <Button
            variant="contained"
            disableElevation
            endIcon={<SendIcon></SendIcon>}
          >
            Send
          </Button>
          <IconButton
            aria-label="send"
            color="success"
            size="small"
            // sx={{
            //   outline: "none",
            //   "&:focus": { outline: "none" },
            //   "&:focus-visible": { outline: "none" },
            // }}
          >
            <SendIcon></SendIcon>
          </IconButton>
        </Stack>
        <Stack direction={"row"}>
          <ButtonGroup variant="contained">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Stack direction={"row"}>
        <ToggleButtonGroup aria-label="text formatting">
          <ToggleButton value={"bold"}>
            <FormatBoldIcon></FormatBoldIcon>
          </ToggleButton>
          <ToggleButton value={"italic"}>
            <FormatItalicIcon></FormatItalicIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
