import { COLORS } from "@/styles/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";

interface Props {
  selectedRating: number;
}

const ThanksContainer = ({ selectedRating }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.navyBlue,
        color: COLORS.white,
        padding: "2rem",
        width: "25.75rem",
        height: "26rem",
        borderRadius: "1.875rem",
        display: "flex",
        flexDirection: "column ",
        alignItems: "center",
        boxShadow: "10px 5px 5px #FFFFFF",
      }}
    >
      <Box>
        <Image
          src="/illustration-thank-you.svg"
          alt="thank-you"
          height={108}
          width={162}
        />

        <Typography sx={{ color: COLORS.orange, marginTop: ".75rem" }}>
          You selected {selectedRating} out of 5
        </Typography>
      </Box>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bolder", marginTop: "1.5rem" }}
      >
        {" "}
        Thank You!{" "}
      </Typography>
      <Typography
        sx={{
          color: COLORS.text,
          lineHeight: "1.75rem",
          fontSize: "1.25rem",
          marginTop: "1.5rem",
          textAlign: "center",
          fontWeight: "light",
        }}
      >
        We appreciate you taking the time to give us a rating. If you ever need
        more support, dont hesitate to get in touch!
      </Typography>
    </Box>
  );
};

export default ThanksContainer;
