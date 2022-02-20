import React, { useState } from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccountPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const CreateAccount = (details) => {
    console.log(details);

    if (
      details.username !== "" &&
      details.email !== "" &&
      details.password !== "" &&
      details.confirmpassword !== ""
    ) {
      console.log("Account created");
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="CreateAccountPage">
      <CreateAccountForm CreateAccount={CreateAccount} error={error} />
    </div>
  );
}

export default CreateAccountPage;
