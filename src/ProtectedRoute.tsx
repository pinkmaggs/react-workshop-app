import React from "react";
import { Navigate } from "react-router";

export type ProtectedRouteProps = {
  Authenticated: boolean;

  authenticationPath: string;

  outlet: JSX.Element;
};

export default function ProtectedRoute({
  Authenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (Authenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
