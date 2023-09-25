import React from "react";
import "./HeroSection.css";
import "../../CommunCss.css";
import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import myPicture from "../../Images/me-bg.png";

function HeroSection({
  skills = ["web developer", "Frontend", "Backend", "Happy to help you"],
  name = "YAHIA",
}) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Java developer");

  useEffect(() => {
    const changeSkill = () => {
      setCount((prevCount) => (prevCount + 1) % skills.length);
      setText(skills[count]);
    };
    const timerId = setTimeout(changeSkill, 1500);
    return () => clearTimeout(timerId);
  }, [count, skills]);

  return (
    <header>
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
            <p className="txt-hero title">HI 👋 !</p>
            <p className="txt-hero title"> MY NAME IS {name} &amp; I AM </p>
            <p className="txt-hero-1">{text}</p>
          </Stack>
        </Grid>
        <Grid item className="hero-image">
          <img
            alt={`A depiction of ${name}`}
            src={myPicture}
            className="img-hero"
          />
        </Grid>
      </Grid>
    </header>
  );
}

export default HeroSection;
