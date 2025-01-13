"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import RatingButton from "./RatingButton";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { COLORS } from "@/styles/colors";
import ThanksContainer from "./ThanksContainer";

const RatingsContainer = () => {
  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const buttons = [1, 2, 3, 4, 5];
  return (
    <Box
      className="container"
      sx={{
        backgroundColor: COLORS.navyBlue,
        padding: "2rem",
        width: "25.75rem",
        height: "26rem",
        borderRadius: "1.875rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {submitted ? (
        <ThanksContainer selectedRating={selected} />
      ) : (
        <>
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
            <Image
              src="/icon-star.svg"
              alt="star-logo"
              height={16}
              width={16}
            />
          </Box>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: 600, color: COLORS.white }}
          >
            How did we do?{" "}
          </Typography>
          <Typography sx={{ color: COLORS.text, marginBottom: "2rem" }}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {buttons.map((button) => {
              return (
                <RatingButton
                  key={button}
                  rating={button}
                  selectedRating={selected}
                  setSelected={setSelected}
                />
              );
            })}
          </Box>
        </>
      )}

      <Button
        sx={{
          backgroundColor: COLORS.white,
          color: COLORS.orange,
          borderRadius: "2rem",
          height: "3rem",
          width: "20rem",
          fontWeight: "bolder",
          marginTop: "2rem",

          "&:hover": {
            backgroundColor: COLORS.orange,
            color: COLORS.white,
          },
        }}
        onClick={() => setSubmitted(true)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default RatingsContainer;
