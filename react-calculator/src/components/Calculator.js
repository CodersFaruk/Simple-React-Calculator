import React, { useState } from "react";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [privious, setPrivious] = useState("");
  const [operation, setOperation] = useState("");

  const appendValueHandler = (e) => {
    let value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const allDeleteHandler = () => {
    setCurrent("");
    setPrivious("");
    setOperation("");
  };
  const operationHandler = (e) => {
    if (current === "") return;
    if (privious !== "") {
      let values = compute();
      setPrivious(values);
    } else {
      setPrivious(current);
    }
    setCurrent("");
    setOperation(e.target.getAttribute("data"));
  };

  const finalResult = () => {
    let value = compute();
    if (value === undefined || value === null) return;

    setCurrent(value);
    setPrivious("");
    setOperation("");
  };

  const compute = () => {
    let result;
    let priviousNumber = parseFloat(privious);
    let currentNumber = parseFloat(current);
    if (isNaN(priviousNumber) || isNaN(currentNumber)) return;
    switch (operation) {
      case "/":
        result = priviousNumber / currentNumber;
        break;
      case "*":
        result = priviousNumber * currentNumber;
        break;
      case "+":
        result = priviousNumber + currentNumber;
        break;
      case "-":
        result = priviousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <>
      <h2 className="header">Calculator</h2>
      <div className="main-container">
        <div className="screen">
          <div className="privious">
            {privious} {operation}
          </div>
          <div className="current">{current}</div>
        </div>

        <div className="grid-container">
          <div className="ac items" onClick={allDeleteHandler}>
            AC
          </div>
          <div className="m items">m+</div>
          <div className="m items">m-</div>
          <div data={"/"} className="operator items" onClick={operationHandler}>
            /
          </div>
          <div data={7} className="decimal items" onClick={appendValueHandler}>
            7
          </div>
          <div data={8} className="decimal items" onClick={appendValueHandler}>
            8
          </div>
          <div data={9} className="decimal items" onClick={appendValueHandler}>
            9
          </div>
          <div data={"*"} className="operator items" onClick={operationHandler}>
            &times;
          </div>
          <div data={4} className="decimal items" onClick={appendValueHandler}>
            4
          </div>
          <div data={5} className="decimal items" onClick={appendValueHandler}>
            5
          </div>
          <div data={6} className="decimal items" onClick={appendValueHandler}>
            6
          </div>
          <div data={"+"} className="operator items" onClick={operationHandler}>
            +
          </div>
          <div data={1} className="decimal items" onClick={appendValueHandler}>
            1
          </div>
          <div data={2} className="decimal items" onClick={appendValueHandler}>
            2
          </div>
          <div data={3} className="decimal items" onClick={appendValueHandler}>
            3
          </div>
          <div data={"-"} className="operator items" onClick={operationHandler}>
            -
          </div>
          <div data={0} className="decimal items" onClick={appendValueHandler}>
            0
          </div>
          <div
            data={"."}
            className="decimal items"
            onClick={appendValueHandler}
          >
            .
          </div>
          <div className="ac items" onClick={deleteHandler}>
            c
          </div>
          <div className="equel items" onClick={finalResult}>
            =
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
