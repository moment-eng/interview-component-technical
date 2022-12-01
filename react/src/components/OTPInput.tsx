import React, { FunctionComponent } from "react";

type OTPInputProps = {
  // the number of inputs fields to render
  // and also the length of the passcode to generate
  length: number;
};

const OTPInput: FunctionComponent<OTPInputProps> = ({ length }) => {
  return (
    <div className={"inline-block p-4 border"}>Create {length} inputs here</div>
  );
};

export default OTPInput;
