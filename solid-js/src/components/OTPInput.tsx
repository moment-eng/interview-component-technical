import { Component, splitProps } from "solid-js";

type OTPInputProps = {
  // the number of inputs fields to render
  // and also the length of the passcode to generate
  length: number;
};

const OTPInput: Component<OTPInputProps> = (props) => {
  const [{ length }] = splitProps(props, ["length"]);

  return (
    <>
      <div class={"inline-block p-4 border space-x-1"}>
        Create {length} inputs here.
      </div>
      <pre class="font-mono text-gray-500 pt-2"></pre>
    </>
  );
};

export default OTPInput;
