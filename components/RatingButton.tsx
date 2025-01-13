import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";
import React from "react";

interface Props {
  rating: number;
  setSelected: (arg1: number) => void;
  selectedRating: number;
}
const RatingButton = ({ rating, setSelected, selectedRating }: Props) => {
  return (
    <Button
      sx={{
        height: "3.75rem",
        width: "3.75rem",
        borderRadius: "100%",
        backgroundColor:
          rating === selectedRating ? COLORS.white : COLORS.navyAccent,
        color: rating === selectedRating ? COLORS.orange : COLORS.text,
        padding: "none",
        marginRight: ".5rem",
        "&:hover": {
          backgroundColor: COLORS.orange,
          color: COLORS.navyAccent,
        },
      }}
      onClick={() => setSelected(rating)}
    >
      {rating}
    </Button>
  );
};

export default RatingButton;
