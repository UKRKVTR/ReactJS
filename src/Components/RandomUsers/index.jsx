import React, { useState } from "react";

function RandomUser() {
  const [users, setUser] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  return (
    <ul>
      {!isFetching &&
        !error &&
        users.map((u) => <li key={u.login.uuid}>{JSON.stringify(u)}</li>)}
    </ul>
  );
}

export default RandomUser;
