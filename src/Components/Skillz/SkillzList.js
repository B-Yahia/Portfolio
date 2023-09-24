import { Avatar, Divider, Rating, Stack, Typography } from "@mui/material";
import React from "react";

import htmlIcon from "../../Images/techno/html.png";
import javaIcon from "../../Images/techno/java.png";
import javaScriptIcon from "../../Images/techno/java-script.png";
import gitHubIcon from "../../Images/techno/github.png";
import reactIcon from "../../Images/techno/atom.png";
import bootstrapIcon from "../../Images/techno/bootstrap.png";

function SkillzList() {
  const mySkillzList = [
    {
      title: "HTML & CSS",
      Evaluation: 3.5,
      ImageSource: htmlIcon,
    },
    {
      title: "JavaScript",
      Evaluation: 4.5,
      ImageSource: javaScriptIcon,
    },
    {
      title: "ReactJS",
      Evaluation: 4,
      ImageSource: reactIcon,
    },
    {
      title: "Java",
      Evaluation: 4,
      ImageSource: javaIcon,
    },
    {
      title: "Springboot",
      Evaluation: 3.5,
      ImageSource: javaIcon,
    },
    {
      title: "Github",
      Evaluation: 3.5,
      ImageSource: gitHubIcon,
    },
    {
      title: "Material UI & Bootstrap",
      Evaluation: 4.5,
      ImageSource: bootstrapIcon,
    },
  ];
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      className="skillz-content"
    >
      {mySkillzList.map((skill) => (
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="techno-content-item"
        >
          <Avatar
            className="stack-content"
            alt="Remy Sharp"
            src={skill.ImageSource}
            variant="square"
          />
          <Typography variant="body2" className="techno-content-item-text">
            {skill.title}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={skill.Evaluation}
            precision={0.5}
            readOnly
          />
        </Stack>
      ))}
    </Stack>
  );
}

export default SkillzList;
