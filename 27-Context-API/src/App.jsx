import { useState } from "react";
import UserContextProvider from "./context/userContextProvider";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
