import React from "react";
import { UserButton, useSession, useUser } from "@clerk/clerk-react";
import "./Hello.css";
import { Navigate } from "react-router-dom";
function Hello() {
  const { user, isSignedIn } = useUser();
  console.log(isSignedIn)
  if(!isSignedIn) {
    return <Navigate to='/' />
  }
 
  return (
    <div className="header">
      <div className="header-subs">
        <p>Hello world {user && user.username}</p>
        <div className="fix">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Hello;
