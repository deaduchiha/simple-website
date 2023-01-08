import React from "react";
import { useQuery } from "@apollo/client";

import { GET_AUTHOR } from "../../../graphql/queries";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHOR);
  if (loading) return <h5>Loading...</h5>;
  if (errors) return <h5>Error</h5>;
  console.log(data);
  return (
    <div>
      <span>this is author</span>
    </div>
  );
};

export default Authors;
