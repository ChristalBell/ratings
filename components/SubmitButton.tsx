import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";
import React from "react";

const SubmitButton = () => {
  return (
    <Button
      sx={{
        backgroundColor: COLORS.white,
        color: COLORS.navyAccent,
        borderRadius: "2rem",
        height: "3rem",
        width: "25vw",
        fontWeight: "bolder",
        "&:hover": {
          backgroundColor: COLORS.orange,
          color: COLORS.white,
        },
      }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
