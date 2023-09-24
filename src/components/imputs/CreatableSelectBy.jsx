import React from "react";
import CreatableSelect from "react-select/creatable";

function CreatableSelectBy({arr, findBy, value, onChange, multipleSelect, required}) {
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
      <CreatableSelect
        value={value}
        onChange={onChange}
        isClearable
        isMulti={multipleSelect}
        required={required}
        className="basic-single"
        classNamePrefix="select"
        options={result}
        clearValue
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

export default CreatableSelectBy;
