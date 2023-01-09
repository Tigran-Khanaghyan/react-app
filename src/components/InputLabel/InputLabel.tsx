import React, { useState } from "react";

interface InputLabelProps {
  setLimit: (param: number) => void
}

function InputLabel({setLimit}: InputLabelProps) {
  const [value, setValue] = useState(10);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value: number = Number(event.target.value);
    if (value <= 0 && value) {
      setValue(1);
    } else if (value > 100) {
      setValue(100);
    } else {
      setValue(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLimit(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          How many products do you want to show?
          <input type="number" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputLabel;
