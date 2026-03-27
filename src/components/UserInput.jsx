import Input from "./Input";

export default function UserInput({ onChangeNumbers }) {
        return (
        <section id="user-input">
            <div className="input-group">
                <Input 
                    keyData={`initialInvestment`}
                    label={`Initial Investment`}
                    onChange={onChangeNumbers}
                />
                <Input 
                    keyData={`annualInvestment`}
                    label={`Annual Investment`}
                    onChange={onChangeNumbers}
                />
            </div>
            <div className="input-group">
                <Input 
                    keyData={`expectedReturn`}
                    label={`Expected Return`}
                    onChange={onChangeNumbers}
                />
                <Input 
                    keyData={`duration`}
                    label={`Duration`}
                    onChange={onChangeNumbers}
                />
            </div>
        </section>
    )
}