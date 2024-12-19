import React from "react";
import Navigation from "./Common/Navigation";

const dashboard = () => {
  return (
    <div>
      <Navigation />
      <div className="absolute top-[50px] left-[250px] h-[calc(100%_-_50px)] w-[calc(100%_-_250px)] bg-green-300">
        this is dash
      </div>
    </div>
  );
};

export default dashboard;
