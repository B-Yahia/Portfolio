import { Button, Paper, Stack, TextField, Grid } from "@mui/material";
import imgContact from "../../Images/techno/undraw_Letter_re_8m03-removebg-preview.png";
import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";
import "../../CommunCss.css";

function Contact() {
  const baseURL = "https://portfolio-app-spring.herokuapp.com/v1/add";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [feedback, SetFeedback] = useState("");

  const dirha = async () => {
    await axios
      .post(
        baseURL,
        {
          name: name,
          email: email,
          message: msg,
        },
        setName(""),
        setEmail(""),
        setMsg("")
      )
      .then(function (response) {
        SetFeedback(response.data);
      })
      .catch(function (error) {
        console.log(error);
        SetFeedback(error.message);
      });
  };

  return (
    <div>
      <Grid
        conatainer
        justifyContent="center"
        alignItems="space-between"
        className="contact-container"
      >
        <Grid item xs={12}>
          <Stack justifyContent="center" alignItems="center">
            <p className="section-title title neumo1">Drop me a message</p>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="flex-end"
          >
            <Grid item xs={12} md={6} className="msg-container">
              <Paper className="form-container ">
                <Stack direction="column" spacing={3}>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    helperText="Please enter your fullname"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    value={name}
                  />
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    helperText="Please enter your email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    value={email}
                  />

                  <TextField
                    size="small"
                    multiline
                    rows={4}
                    id="outlined-multiline-static"
                    helperText={feedback}
                    onChange={(event) => {
                      setMsg(event.target.value);
                    }}
                    value={msg}
                  />

                  <Button
                    variant="contained"
                    disableElevation
                    type="submit"
                    size="small"
                    onClick={dirha}
                  >
                    <svg width="32" height="32" viewBox="0 0 48 48">
                      <g
                        fill="none"
                        stroke="#000"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <path d="M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z" />
                        <path
                          stroke-linecap="round"
                          d="M43.0001 5L22.1001 25.9"
                        />
                      </g>
                    </svg>
                  </Button>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                alt={"contact-me"}
                src={imgContact}
                className="contact-image"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
