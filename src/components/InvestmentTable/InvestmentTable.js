export default function InvestmentTable(props) {
    return (
    <table className="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
                {
                    props.data.map((investment)=> 
                         (
                            <tr key={investment.year}>
                            <td>{investment.year}</td>
                            <td>{investment.savingsEndOfYear.toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                minimumFractionDigits: 2 
                            })}</td>
                            <td>{investment.yearlyInterest.toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                minimumFractionDigits: 2
                            })}</td>
                            <td>{(investment.savingsEndOfYear - props.initialInvestment - investment.yearlyContribution * investment.year).toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                minimumFractionDigits: 2
                            })}</td>
                            <td>{(props.initialInvestment + investment.yearlyContribution * investment.year).toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                minimumFractionDigits: 2
                            })}</td>
                           </tr>
                        )
                    )
                }
                
        </tbody>
    </table>
    )
}