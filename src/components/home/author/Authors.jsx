import React from "react";
import { useQuery } from "@apollo/client";

import { GET_AUTHOR } from "../../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHOR);
  if (loading) return <h5>Loading...</h5>;
  if (errors) return <h5>Error</h5>;
  const { authors } = data;

  return (
    <Grid container>
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
