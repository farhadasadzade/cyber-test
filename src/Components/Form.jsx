import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeLast } from "../redux/actions/addToForm";

function Form() {
  const dispatch = useDispatch();

  const formRef = useRef();

  const [a, setA] = useState(false);
  const [formdata, setData] = useState("");

  const obj = useSelector((form) => form.form);

  const handleChange = (e) => {
    setData({
      ...formdata,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const remove = () => {
    dispatch(removeLast());
    setA(!a);
  };

  const submit = () => {
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
  };

  return (
    <div className="form">
      Form <br />
      <form ref={formRef} id="form" action="submit">
        {obj &&
          obj.map((item) => {
            return item.type !== "textarea" ? (
              <label key={item.labelName}>
                {item.labelName}{" "}
                <input
                  onChange={handleChange}
                  name={item.labelName}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              </label>
            ) : (
              <label key={item.labelName}>
                {item.labelName}{" "}
                <textarea
                  onChange={handleChange}
                  name={item.labelName}
                  placeholder={item.placeholder}
                ></textarea>
              </label>
            );
          })}
      </form>
      <button onClick={submit}>Submit</button>
      <button onClick={() => remove()}>RemoveLast</button>
    </div>
  );
}

export default Form;
