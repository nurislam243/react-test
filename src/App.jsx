import { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar"
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsCharts from "./components/ResultsCharts/ResultsCharts";

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <ResultsCharts></ResultsCharts>
      </main>
    </>
  )
}

export default App
