import { Divider, Stack } from "@mui/material";
import React from "react";
import "./Menu.css";
import "../../CommunCss.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Stack
        direction="row"
        className="menu neumo "
        divider={<Divider orientation="vertical" flexItem />}
      >
        <div className="menu-option">
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 21V9l8-6l8 6v12h-6v-7h-4v7Zm2-2h2v-7h8v7h2v-9l-6-4.5L6 10Zm6-6.75Z"
              />
            </svg>
            <p>Home</p>
          </Link>
        </div>
        <div className="menu-option">
          <Link
            to={"/projects"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <svg width="32" height="32" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M90 144v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0Zm38 6a6 6 0 0 0 6-6v-24a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6Zm32 0a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Zm54-72v100h10a6 6 0 0 1 0 12h-90v20.8a22 22 0 1 1-12 0V190H32a6 6 0 0 1 0-12h10V78h-2a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v16a14 14 0 0 1-14 14Zm-86 144a10 10 0 1 0 10 10a10 10 0 0 0-10-10ZM40 66h176a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Zm162 12H54v100h148Z"
              />
            </svg>
            <p>Projects</p>
          </Link>
        </div>
        <div className="menu-option">
          <Link
            to={"/about"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
              />
            </svg>
            <p>About me</p>
          </Link>
        </div>
        <div className="menu-option">
          <Link
            to={"/contact"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m10.05 13.95l-6.4-2.6q-.275-.125-.462-.375Q3 10.725 3 10.4q0-.325.175-.575q.175-.25.475-.375l15.3-5.675q.3-.125.575-.05Q19.8 3.8 20 4q.2.2.275.475q.075.275-.05.575l-5.675 15.3q-.125.325-.387.487q-.263.163-.538.163t-.55-.163q-.275-.162-.425-.487Zm3.5 3.35L17.6 6.4L6.7 10.45l4.9 1.95Zm-1.95-4.9Z"
              />
            </svg>
            <p>Contact Me</p>
          </Link>
        </div>
      </Stack>
    </div>
  );
}

export default Menu;
