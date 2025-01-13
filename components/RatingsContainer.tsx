import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import RatingButton from "./RatingButton";
import SubmitButton from "./SubmitButton";
import { Container } from "@mui/material";
import { COLORS } from "@/styles/colors";

const RatingsContainer = () => {
  const buttons = [1, 2, 3, 4, 5];
  return (
    <Box
      sx={{
        backgroundColor: COLORS.navyBlue,
        padding: "2rem",
        width: "25.75rem",
        height: "26rem",
        borderRadius: "1.875rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: COLORS.navyAccent,
          borderRadius: "50%",
          height: "3rem",
          width: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src="/icon-star.svg" alt="star-logo" height={16} width={16} />
      </Box>
      <Typography
        sx={{ fontSize: "2rem", fontWeight: 600, color: COLORS.white }}
      >
        How did we do?{" "}
      </Typography>
      <Typography sx={{ color: COLORS.text, marginBottom: "2rem" }}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Typography>
      {buttons.map((button) => {
        return <RatingButton key={button} label={button} />;
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          alignItems: "center",
        }}
      >
        <SubmitButton />
      </div>
    </Box>
  );
};

export default RatingsContainer;
