import React from "react";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

const HomePages = () => {
  const logout = async () => {
    await signOut(auth);
  };
  return <button onClick={logout}>logout</button>;
};

export default HomePages;