import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MuiRating() {
  const [value, setValue] = useState<number | null>(null);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newVlaue: number | null
  ) => {
    setValue(newVlaue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Stack>
  );
}
