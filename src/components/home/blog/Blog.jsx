import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BLOGS_INFO } from "../../../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "../../shared/CardEL";

const Blog = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h5>Loading...</h5>;
  if (errors) return <h5>Error</h5>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
