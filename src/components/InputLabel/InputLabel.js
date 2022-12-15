import { useState } from "react";

function InputLabel(props) {
  const [value, setValue] = useState(10);

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    if (value <= 0 && value) {
      setValue(1);
    } else if (value > 100) {
      setValue(100);
    } else {
      setValue(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLimit(value);
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
