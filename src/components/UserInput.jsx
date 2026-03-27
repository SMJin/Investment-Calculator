import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment";
import Input from "./Input";

export default function UserInput() {
    const [annualData, setAnnualData] = useState({
        initialInvestment: 15000,
        annualInvestment: 900,
        expectedReturn: 5.5,
        duration: 12,
    });

    let results = calculateInvestmentResults({...annualData});
    console.log(results);

    const handleInputNumber = (inputIdentifier, newValue) => {
        setAnnualData(prev => {
            return {
                ...prev,
                [inputIdentifier]: newValue,
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <Input 
                    keyData={`initialInvestment`}
                    label={`Initial Investment`}
                    onChange={handleInputNumber}
                />
                <Input 
                    keyData={`annualInvestment`}
                    label={`Annual Investment`}
                    onChange={handleInputNumber}
                />
            </div>
            <div className="input-group">
                <Input 
                    keyData={`expectedReturn`}
                    label={`Expected Return`}
                    onChange={handleInputNumber}
                />
                <Input 
                    keyData={`duration`}
                    label={`Duration`}
                    onChange={handleInputNumber}
                />
            </div>
        </section>
    )
}