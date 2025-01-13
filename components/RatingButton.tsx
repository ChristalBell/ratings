import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";
import React from "react";

interface Props {
  label: number;
}
const RatingButton = ({ label }: Props) => {
  return (
    <Button
      sx={{
        height: "3.75rem",
        width: "3.75rem",
        borderRadius: "100%",
        backgroundColor: COLORS.navyAccent,
        color: COLORS.text,
        padding: "none",
        marginRight: ".5rem",
        "&:hover": {
          backgroundColor: COLORS.orange,
          color: COLORS.navyAccent,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default RatingButton;
