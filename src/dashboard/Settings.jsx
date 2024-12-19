import React from "react";
import Navigation from "./Common/Navigation";

const Settings = () => {
  return (
    <>
      <Navigation />
      <div className="bg-gray-300 absolute top-[50px] left-[250px] h-[calc(100%_-_50px)] w-[calc(100%_-_250px)] p-4 ">
        Settings
      </div>
    </>
  );
};

export default Settings;
