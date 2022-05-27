import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { addToForm } from "../redux/actions/addToForm";

function Config() {
  const dispatch = useDispatch();

  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [type, setType] = useState("input");

  const labelRef = useRef();
  const placeholderRef = useRef();
  const typeRef = useRef();

  const handleChange = () => {
    setLabel(labelRef.current.value);
    setPlaceholder(placeholderRef.current.value);
    setType(typeRef.current.value);
  };

  const add = () => {
    const obj = {
      labelName: label,
      placeholder,
      type,
    };
    dispatch(addToForm(obj));
    labelRef.current.value = "";
    placeholderRef.current.value = "";
  };

  return (
    <div className="config">
      <form>
        <label>
          label
          <input type="text" ref={labelRef} onChange={handleChange} />
        </label>
        <label>
          placeholder
          <input type="text" ref={placeholderRef} onChange={handleChange} />
        </label>
        <label>
          type
          <select
            name="input_type"
            id="select"
            ref={typeRef}
            onChange={handleChange}
          >
            <option value="input">input</option>
            <option value="textarea">textarea</option>
            <option value="date">datepicker</option>
            <option value="email">email</option>
          </select>
        </label>
      </form>
      <button onClick={() => add()}>add to form</button>
    </div>
  );
}

export default Config;
