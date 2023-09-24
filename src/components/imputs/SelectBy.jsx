import React from "react";

import Select from "react-select";

function SelectBy({arr, findBy}) {
  const result = [];
  const tmp = [];

  arr.forEach(el => {
    tmp.push(el[findBy]);
  });

  const uniqArr = Array.from(new Set(tmp));

  uniqArr.forEach(el => {
    result.push({value: el, label: el});
  });

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        name={findBy}
        options={result}
      />

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      ></div>
    </>
  );
}

export default SelectBy;
