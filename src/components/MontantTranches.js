import React from "react";
import "./Inputs.css";
function MontantTranches({ amount, index }) {
  return (
    <>
      {amount.map((val, key) => {
        return <tr>{val}</tr>;
      })}
      <tr>
        <td style={{ backgroundColor: "black", color: "white" }}>Total</td>
        <td>{amount.reduce((a, b) => a + b, 0)}</td>
      </tr>
    </>
  );
}

export default MontantTranches;
