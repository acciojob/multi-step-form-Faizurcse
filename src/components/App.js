
import React, { useState } from "react";
import CoustomerDetails from "./CoustomerDetails";
import Cars from "./Cars";
import Payment from "./Payment";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = (e) => {
    e.preventDefault()
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

 function Submitform(e){
  e.preventDefault()
  console.log(e.target.value)
 }

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div
        style={{
          backgroundColor: "skyblue",
          width: "25%",
          height: "70%",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {step === 1 && <CoustomerDetails nextStep={nextStep} />}
        {step === 2 && <Cars nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Payment prevStep={prevStep} Submitform={Submitform} />}

        
      </div>
    </div>
  );
};

export default App;
