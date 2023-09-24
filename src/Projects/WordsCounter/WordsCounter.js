import React, { useState } from "react";
import "./WordsCounter.css";
import "../../CommunCss.css";
import { Grid, Stack, TextField } from "@mui/material";

function WordsCounter() {
  const [text, setText] = useState("");

  const eliminateWhiteSpace = (str) => {
    return str.replace(/^\s+|\s+$/g, "");
  };

  const countWords = (str) => {
    if (str.length === 0) {
      return 0;
    } else {
      const str1 = eliminateWhiteSpace(str);
      const words = str1.split(" ");
      return words.length;
    }
  };

  const countSpaces = (str) => {
    const spaces = str.match(/ /g);
    return spaces ? spaces.length : 0;
  };
  const countParagraphs = (str) => {
    if (str.length === 0) {
      return 0;
    } else {
      const paragraphs = str
        .split(/\n+/)
        .filter((paragraph) => paragraph.trim() !== "");
      return paragraphs.length;
    }
  };

  return (
    <div>
      <Stack
        className="wordCounter bg1"
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <p className="title neumo1">Words Counter</p>
        <Grid container justifyContent="space-evenly" alignItems="baseline">
          <Grid item xs={12} md={7} className="text-data">
            <TextField
              autoFocus
              placeholder="Paste the text here"
              multiline
              rows={4}
              fullWidth
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4} className="text-data">
            <Stack
              className="text-data"
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <p>Number of words : {countWords(text)}</p>
              <p>Number of spaces : {countSpaces(text)} </p>
              <p>Number of Paragraphes : {countParagraphs(text)}</p>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}

export default WordsCounter;
