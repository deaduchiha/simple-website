import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Container, Grid, Typography, Box } from "@mui/material";
import sanitizeHtml from "sanitize-html";

// icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// components
import Loader from "../../shared/Loader";
import { GET_POST_INFO } from "../../../graphql/queries";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (errors) return <h5>Error</h5>;
  console.log(data);

  const {
    post: { title, coverPhoto, author, content },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container padding={3}>
        <Grid item xs={12} mt={8} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={coverPhoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center" gap={2}>
          <Avatar
            src={author.avatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
