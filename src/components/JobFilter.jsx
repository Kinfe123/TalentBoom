import React, { useState } from "react";
import styles from "./Jobfilter.module.css";
import Select from "react-select";

const Filter = ({ label, options, onChange, isMulti }) => {
  return (
    <div
      style={{
        width: "400px",
        maxWidth: "90%",
        textAlign: "left",
        padding: ".5em",
      }}
    >
      <p
        style={{
          margin: ".4em 0",
          fontSize: "1.2em",
        }}
      >
        {label}
      </p>

      <Select options={options} onChange={onChange} isMulti={isMulti} />
    </div>
  );
};

export default Filter;