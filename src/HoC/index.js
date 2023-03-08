import PrivateContent from "HoC/PrivateContent";
import React, { useState } from "react";
import DynamicButton from "./DynamicButton";

export const HocContent = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <PrivateContent isAuth={true} />
      <DynamicButton disable={disabled} />
    </div>
  );
};
