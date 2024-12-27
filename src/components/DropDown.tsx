import React from "react";
import "../Dropdown.css";
import { options } from "../helpers";
import { Options } from "./Options";

const DropDown: React.FC = () => {
  return <Options options={options}/>
};

export default DropDown;
