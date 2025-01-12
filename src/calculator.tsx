import React from "react";
import { evaluate } from "mathjs";

const rows = [["7", "8", "9"], ["4", "5", "6"], ["1", "2", "3"], ["0"]];
export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
export const operations = ["/", "*", "-", "+"];

function Calculator() {
  const [value, setValue] = React.useState("");
  const handleButton = (number: string) => (): void => setValue(value + number);
  const calculate = (): void => setValue(evaluate(value).toString());

  return (
    <section>
      <h1>Calculator</h1>
      <input type="text" readOnly value={value} />
      <div role="grid">
        {rows.map((row) => (
          <div role="row" key={row.join("")}>
            {row.map((number) => (
              <button
                key={number}
                role="gridcell"
                onClick={handleButton(number)}
              >
                {number}
              </button>
            ))}
          </div>
        ))}
        {operations.map((operation) => (
          <button
            key={operation}
            role="gridcell"
            onClick={handleButton(operation)}
          >
            {operation}
          </button>
        ))}
        <button role="gridcell" onClick={calculate}>
          =
        </button>
      </div>
    </section>
  );
}

export default Calculator;
