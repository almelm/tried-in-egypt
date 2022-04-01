import React, {useState} from "react";
import { gql } from "@apollo/client";
import { useSubscription, useMutation } from "@apollo/react-hooks";
import { List, ListItem } from "./shared/List";
import { Badge } from "./shared/Badge";
import InputForm from "./shared/InputForm";

const THING = gql`
  subscription Thing($id: uuid!) {
    things_by_pk(id: $id) {
      id
      name
      type
      reviews(order_by: {created_at: desc}) {
      id
      body
      created_at
    }
    }
  }
`;

const ADD_REVIEW = gql`
mutation($body: String!, $id: uuid!) {
  AddFearlessReview(body: $body, id:$id) {
    affected_rows
  }
}
`;

const Thing = ({
  match: {
    params: { id },
  },
}) => {
  const [inputVal, setInputVal] = useState("");
  const { loading, error, data } = useSubscription(THING, {
    variables: { id },
  });

  const [addReview] = useMutation(ADD_REVIEW);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  const { name, type, reviews } = data.things_by_pk;

  return (
    <div>
      <h3>
        {name} <Badge>{type}</Badge>
      </h3>
      <InputForm 
        inputVal={inputVal}
        onChange = {(e) => setInputVal(e.target.value)}
        onSubmit={() => {
          addReview({ variables: { id, body: inputVal }})
            .then(() => setInputVal(""))
            .catch((e) => {
              setInputVal(e.message);
            });
        }}
        buttonText="Submit"
      />
      <List>
        {reviews.map((review) => (
          <ListItem key={review.id}>{review.body}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Thing;