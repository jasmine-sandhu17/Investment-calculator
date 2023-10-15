import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Calculator from './components/InvestmentCalculator/InvestmentCalculator';
import InvestmentTable from './components/InvestmentTable/InvestmentTable';
import './App.css';



function App() {
  const [investment, setInvestment] = useState(null)
  const calculateHandler = (userInput) => {
    setInvestment(userInput);
  }

  const yearlyData = [];
  if (investment !== null) {
    let currentSavings = +investment['current-savings'];
    const yearlyContribution = +investment['yearly-contribution'];
    const expectedReturn = +investment['expected-return'] / 100;
    const duration = +investment['duration'];
  
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Calculator onCalculate={calculateHandler}/>
      {!investment && <p className='text-alginment'>No investment Calculated</p>}
      {
        investment && <InvestmentTable data={yearlyData} initialInvestment={investment['current-savings']}/>
      }
     
    </div>
  );
}

export default App;
