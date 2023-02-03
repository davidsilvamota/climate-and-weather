import React, { createContext } from "react";

const defaultValues = {
  displayName: "",
  userAuth: false,
};
const AuthContext = createContext(defaultValues);

export default AuthContext;
