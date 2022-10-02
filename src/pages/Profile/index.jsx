import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  // get ID from url
  const params = useParams();

  return <div>Profile -- User {params.id} </div>;
}

export default Profile;
