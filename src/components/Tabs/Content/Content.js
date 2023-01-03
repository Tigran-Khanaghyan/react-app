import React from "react";

const Content = ({ infoClassName, children }) => {
  return (
    <>
      <div className={infoClassName}>{children}</div>
    </>
  );
};

export default Content;
