import React from "react";
import "./HeroSection.css";
import "../../CommunCss.css";
import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import myPicture from "../../Images/me-bg.png";

function HeroSection() {
  const skills = ["web developer", "Frontend", "Backend", "Happy to help you"];
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Java developer");
  useEffect(() => {
    const timer = setTimeout(() => {
      changeSkill();
    }, 1500);
  }, [text]);

  function changeSkill() {
    if (count < skills.length) {
      setCount(count + 1);
      setText(skills[count]);
    } else {
      setCount(0);
      setText("Fullstack");
    }
  }

  return (
    <div>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-evenly" }}
        alignItems="center"
        className="hero-container"
      >
        <Grid item>
          <Stack
            alignItems="center"
            justifyContent="center"
            className="neumo1 hero-text"
          >
            <p className="txt-hero title">HI &#128075; !</p>
            <p className="txt-hero title"> MY NAME IS YAHIA &amp; I AM </p>
            <p className="txt-hero-1">{text}</p>
          </Stack>
        </Grid>
        <Grid item className="hero-image">
          <img alt={"me"} src={myPicture} className="img-hero" />
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;
