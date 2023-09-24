import React from "react";
import Card from "../../Elements/Card/Card";
import data from "../../Data/ProjectsData";
import { Stack } from "@mui/material";

function Projects() {
  return (
    <div className="section-container bg1">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className="about-section"
      >
        <p className="title neumo1">Projects</p>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="baseline"
        >
          {data.map((item) => (
            <Card
              key={item._id}
              title={item.name}
              description={item.description}
              link={item.link}
            />
          ))}
        </Stack>
      </Stack>
    </div>
  );
}

export default Projects;
