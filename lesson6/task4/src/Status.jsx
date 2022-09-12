import React from "react";
import Online from "./Online";
import Offline from "./Offline";

const Status = ({ isOnline }) => {
  if (!isOnline) {
    return <Offline />;
  }
  return <Online />;
};
export default Status;
