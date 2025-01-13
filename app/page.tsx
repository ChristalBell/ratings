"use client";
import RatingsContainer from "@/components/RatingsContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
      }}
    >
      : <RatingsContainer />
    </Box>
  );
};

export default Home;
