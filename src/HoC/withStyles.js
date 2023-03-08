import React from "react";
import commonStyles from "./commonStyles";

const withStyles = (WrappedComponent) => {
  const translateProps = (props) => {
    let _styles = { ...commonStyles.default };
    if (props.disable) {
      _styles = { ..._styles, ...commonStyles.disable };
    }
    const newProps = { ...props, styles: _styles };
    return newProps;
  };

  return function wrappedRender(originalProps) {
    const _newProps = translateProps(originalProps);
    return <WrappedComponent {..._newProps} />;
  };
};

export default withStyles;
