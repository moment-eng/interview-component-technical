import { Component } from "solid-js";
import cx from "classnames";
import OTPInput from "./components/OTPInput";

const App: Component = () => {
  const wrapperStyles = [
    "p-16",
    // make inputs easier to see initially
    // since tailwind pre-flight removes borders
    // by default
    "[&_input]:border",
    "[&_input]:border-gray-300"
  ];

  return (
    <div class={cx(wrapperStyles)}>
      <h1 class={"font-bold text-md pb-2"}>Enter Code:</h1>
      <OTPInput length={6} />
    </div>
  );
};

export default App