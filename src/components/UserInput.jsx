import Input from "./Input";

export default function UserInput({ onChangeNumbers }) {
        return (
        <section id="user-input">
            <div className="input-group">
                <Input 
                    keyData={`initialInvestment`}
                    label={`Initial Investment`}
                    initialValue={1500}
                    onChange={onChangeNumbers}
                />
                <Input 
                    keyData={`annualInvestment`}
                    label={`Annual Investment`}
                    initialValue={900}
                    onChange={onChangeNumbers}
                />
            </div>
            <div className="input-group">
                <Input 
                    keyData={`expectedReturn`}
                    label={`Expected Return`}
                    initialValue={5.5}
                    onChange={onChangeNumbers}
                />
                <Input 
                    keyData={`duration`}
                    label={`Duration`}
                    initialValue={12}
                    onChange={onChangeNumbers}
                />
            </div>
        </section>
    )
}