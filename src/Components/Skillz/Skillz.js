import { Grid } from "@mui/material";
import React from "react";
import "./Skillz.css";
import "../../CommunCss.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillzList from "./SkillzList";

function Skillz() {
  console.log(SkillzList);
  return (
    <div>
      <Grid
        container
        className="skillz-section"
        justifyContent="center"
        alignItems="space-between"
      >
        <Grid item>
          <SectionTitle title={"Skillz"} />
        </Grid>
        <Grid item xs={12}>
          <SkillzList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Skillz;
