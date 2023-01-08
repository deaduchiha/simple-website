import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <Grid container sx={{ borderRadius: 4, py: 1, mt: 5 }}>
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Comment
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="username"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="username"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <Button variant="contained">Submit</Button>
      </Grid>
    </Grid>
  );
};

export default CommentForm;
