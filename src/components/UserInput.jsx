import { useState } from "react"
import NumberInput from "./NumberInput";

export default function UserInput() {
    const [userData, setUserData] = useState({
        initialInvestment: 1200,
        annualInvestment: 900,
        expectedReturn: 5.5,
        duration: 12,
    });

    return <section id="user-input">
        <div className="input-group">
            <NumberInput label={`Initial Investment`} />
            <NumberInput label={`Annual Investment`} />
        </div>
        <div className="input-group">
            <NumberInput label={`Expected Return`} />
            <NumberInput label={`Duration`} />
        </div>
    </section>
}