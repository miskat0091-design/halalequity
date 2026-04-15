/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Hero"; // I put Navbar in Hero.tsx for convenience in the previous step, let me check
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Calculator } from "./components/Calculator";
import { PaymentProof } from "./components/PaymentProof";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {/* Row 1 & 2: Hero (2x2) */}
          <div className="md:col-span-2 md:row-span-2 flex">
            <Hero />
          </div>
          
          {/* Features - these are the 3 cards in the design: shariah, admin, pmt */}
          <Features />
          
          {/* Calculator - 1x1 */}
          <Calculator />
          
          {/* Row 3: How It Works - 4 cards */}
          <HowItWorks />

          {/* Payment Proof - spans 2 columns at the bottom or wherever it fits */}
          <div className="md:col-span-2 flex">
            <PaymentProof />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
