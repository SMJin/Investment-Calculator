import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";


function App() {
  const [annualData, setAnnualData] = useState({
      initialInvestment: 15000,
      annualInvestment: 900,
      expectedReturn: 5.5,
      duration: 12,
  });

  const inputIsValid = annualData.duration >= 1;

  const handleInputNumber = (inputIdentifier, newValue) => {
      setAnnualData(prev => {
          return {
              ...prev,
              [inputIdentifier]: +newValue,
          }
      })
  }

  return (
    <main>
      <Header />
      <UserInput onChangeNumbers={handleInputNumber} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results annualData={annualData} />}
    </main>
  )
}

export default App
