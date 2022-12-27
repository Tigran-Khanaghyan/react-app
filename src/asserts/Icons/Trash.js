import React from "react";
import { ReactComponent as TrashIcon } from "../images/trash.svg";

const Trash = ({ height, width }) => {
  return (
    <>
      <TrashIcon height={height} width={width} />
    </>
  );
};

export default Trash;
