import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { List, ListItemWithLink } from "./shared/List";
import { Badge } from "./shared/Badge";

const THINGS = gql`
  {
    things {
      id
      name
      type
    }
  }
`;

const Things = ({ newThings }) => {
  const { loading, error, data } = useQuery(THINGS);

  const renderThings = (things) => { 
    return things.map(({ id, name, type }) => (
      <ListItemWithLink key={id}>
        <Link to={`/thing/${id}`}>
        {name} <Badge>{type}</Badge>
        </Link>
      </ListItemWithLink>
   ));
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;



  return <List>{renderThings(newThings || data.things)}</List>;
};

export default Things;