import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
      coverPhoto {
        url
      }
      title
      slug
      id
    }
  }
`;

const GET_AUTHOR = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHOR };
