import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile({}) {
  const { user } = useContext(UserContext);

  return !user ? <p>please login</p> : <p>welcome {user.username}</p>;
}

export default Profile;
