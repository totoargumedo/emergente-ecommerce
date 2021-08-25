import React from "react";
import { Loader } from "semantic-ui-react";

// LIBRERIAS
import "./LoaderSpinner.css";

export const LoaderSpinner = () => (
  <div className="LoaderSpinner">
    <Loader active inline="centered" size="huge" />
  </div>
);
