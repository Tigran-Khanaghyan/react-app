import React from "react";
import { ReactComponent as DeleteIcon } from "../images/delete.svg";

const Delete = ({ height, width }) => {
  return (
    <>
      <DeleteIcon height={height} width={width} />
    </>
  );
};

export default Delete;