import React, { useState } from "react";
import "./GuessColor.css";
import "../../CommunCss.css";
import { Button, Grid, Stack } from "@mui/material";

function GuessColor() {
  const [randomNum, setRandomNum] = useState(0);
  const [score, setScore] = useState(0);
  const [numOfAttempts, setNumOfAttempts] = useState(0);
  const colorArray = ["white", "black", "red"];

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const setArrOfColors = (e, selectedNum) => {
    e.preventDefault();
    setRandomNum(randomNumberInRange(0, 2));
    colorArray.length = 0;
    for (let i = 0; i < 3; i++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const theColor = "#" + randomColor;
      colorArray.push(theColor);
    }
    if (randomNum === selectedNum) {
      setScore(score + 1);
      setNumOfAttempts(numOfAttempts + 1);
    } else {
      setNumOfAttempts(numOfAttempts + 1);
    }
  };

  return (
    <div>
      <div className="section-container bg1">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <div
              className="colorDisplay"
              style={{ backgroundColor: colorArray[randomNum] }}
            ></div>
          </Grid>
          <Grid item>
            <Stack>
              <Button variant="outlined" onClick={(e) => setArrOfColors(e, 0)}>
                {colorArray[0]}
              </Button>
              <Button variant="outlined" onClick={(e) => setArrOfColors(e, 1)}>
                {colorArray[1]}
              </Button>
              <Button variant="outlined" onClick={(e) => setArrOfColors(e, 2)}>
                {colorArray[2]}
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <Stack>
              <div>Correct answers {score}</div>
              <div>Wrong answers {numOfAttempts - score}</div>
              {numOfAttempts !== 0 ? (
                <div>
                  Percentage of correct answers :
                  {(score / numOfAttempts) * 100.0}
                </div>
              ) : (
                <></>
              )}
            </Stack>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default GuessColor;
