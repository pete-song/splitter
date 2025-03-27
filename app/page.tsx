"use client";
import Header from "@/components/Header";
import TipButton from "@/components/TipButton";
import TipInput from "@/components/TipInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [ppl, setPpl] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    calculateTip();
  }, [bill, ppl, tipPercentage]);

  const calculateTip = () => {
    const numericBill = parseFloat(bill) || 0;
    const numericPpl = parseInt(ppl) || 0;

    if (numericPpl <= 0) {
      setError("Can't be zero.");
      setTipPerPerson(0);
      setTotalPerPerson(0);
      return;
    }
    setError("");

    const tipAmount = (numericBill * tipPercentage) / 100;
    const totalAmount = numericBill + tipAmount;
    
    setTipPerPerson(Math.floor((tipAmount / numericPpl) * 100) / 100);
    setTotalPerPerson(Math.floor((totalAmount / numericPpl) * 100) / 100);
  };

  const handleReset = () => {
    setBill("");
    setPpl("");
    setTipPercentage(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
    setError("");
  };

  return (
    <div className="bg-cyan-100 flex flex-col justify-center items-center min-h-screen p-4 sm:p-8 font-[family-name:var(--font-space-mono)]">
      <div>
        <Header />
      </div>
      <div className="flex flex-col mt-20 lg:flex-row bg-white rounded-3xl w-full max-w-[800px] p-4 sm:p-7 gap-6 shadow-lg">
        
        {/* Left Half */}
        <div className="flex flex-col w-full lg:w-1/2 gap-5">
          <div>
            <h3 className="text-md text-cyan-800">Bill</h3>
            <TipInput
              icon={<DollarSign size={16} />}
              placeholder="0"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-md text-cyan-800 mb-2">Select Tip %</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[5, 10, 15, 20, 25].map((perc, index) => (
                <TipButton key={index} perc={perc} selected={tipPercentage === perc} onClick={() => setTipPercentage(perc)} />
              ))}
              <Input
                type="number"
                placeholder="Custom"
                className="w-full h-full text-2xl text-right font-bold bg-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500"
                onChange={(e) => setTipPercentage(parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-between relative">
              <h3 className="text-md text-cyan-800">Number of People</h3>
              {error && <p className="text-red-500 text-sm absolute right-0 top-1">{error}</p>}
            </div>
            <TipInput
              icon={<User size={16} />}
              placeholder="0"
              value={ppl}
              onChange={(e) => setPpl(e.target.value)}
            />
          </div>
        </div>

        {/* Right Half */}
        <div className="w-full lg:w-1/2 bg-teal-900 p-6 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between mb-3">
              <div>
                <h4 className="text-white font-bold text-sm">Tip Amount</h4>
                <h5 className="text-gray-400 text-sm">/ person</h5>
              </div>
              <h1 className="font-bold text-4xl text-teal-500">${tipPerPerson.toFixed(2)}</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h4 className="text-white font-bold text-sm">Total</h4>
                <h5 className="text-gray-400 text-sm">/ person</h5>
              </div>
              <h1 className="font-bold text-4xl text-teal-500">${totalPerPerson.toFixed(2)}</h1>
            </div>
          </div>
          <Button
            disabled={!bill || !ppl || parseFloat(bill) === 0 || parseInt(ppl) === 0}
            className="font-bold text-xl bg-teal-500 text-teal-900 w-full hover:bg-teal-200 mt-4"
            onClick={handleReset}
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  );
}
