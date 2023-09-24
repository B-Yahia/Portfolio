import React, { useEffect, useState } from "react";
import Axios from "axios";
import Paper from "@mui/material/Paper";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Dashboard.css";

const baseURL = "https://portfolio-app-spring.herokuapp.com/v1/getAllMsgs";
function Dashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Axios.get(baseURL)
      .then((response) => {
        setMessages(response.data);
        console.log(messages);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const messageTable = messages.map((msg, index) => (
    <TableRow key={index}>
      <TableCell>{msg.name}</TableCell>
      <TableCell>{msg.email}</TableCell>
      <TableCell>{msg.message}</TableCell>
    </TableRow>
  ));

  return (
    <div className="dashboard-section">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Contact name</TableCell>
              <TableCell>Contact email</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{messageTable}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
