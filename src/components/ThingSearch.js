import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import InputForm from "./shared/InputForm";
import Things from "./Things";

const SEARCH = gql`
  query Search($match: String) {
    things(order_by: { name: asc }, where: { name: { _ilike: $match } }) {
      name
      type
      id
    }
  }
`;

const ThingSearch = () => {
  const [inputVal, setInputVal] = useState("");
  const [search, { loading, error, data }] = useLazyQuery(SEARCH);

  return (
    <div>
      <InputForm
        inputVal={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onSubmit={() => search({ variables: { match: `%${inputVal}%` } })}
      />
      <Things newThings={data ? data.things : null} />
    </div>
  );
};

export default ThingSearch;