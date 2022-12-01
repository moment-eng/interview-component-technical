import cx from "classnames";
import OTPInput from "./components/OTPInput";

function App() {
  const wrapperStyles = [
    "p-16",
    // make inputs easier to see initially
    // since tailwind pre-flight removes borders
    // by default
    "[&_input]:border",
    "[&_input]:border-gray-300"
  ];

  return (
    <div className={cx(wrapperStyles)}>
      <h1 className={"font-bold text-md pb-2"}>Enter Code:</h1>
      <OTPInput length={6} />
    </div>
  );
}

export default App;
