import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default Profile;
