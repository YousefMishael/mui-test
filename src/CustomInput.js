import React, { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

// function CustomInput({ ref }) {
//   return <input ref={ref} />;
// }

export default CustomInput;
