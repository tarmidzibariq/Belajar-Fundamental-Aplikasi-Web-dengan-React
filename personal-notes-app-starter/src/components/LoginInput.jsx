import React from "react";
import PropTypes from "prop-types";

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) => setValue(event.target.value);
  return [value, handleValueChange];
}
function LoginInput() {
   
}

export default LoginInput;