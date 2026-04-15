import { useState } from "react";
import { Calculator as CalcIcon, TrendingUp, Calendar, DollarSign } from "lucide-react";

export function Calculator() {
  const [amount, setAmount] = useState<number>(5000);
  
  const monthlyProfit = Math.round(amount * 0.2);

  return (
    <section className="bento-card">
      <div className="text-xs font-bold text-slate-text uppercase tracking-widest mb-6">প্রফিট ক্যালকুলেটর</div>
      
      <div className="bg-navy p-4 rounded-xl border border-border mb-4">
        <div className="text-[10px] text-slate-text uppercase mb-1">আপনার বিনিয়োগ</div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gold">৳ {amount.toLocaleString()}</div>
          <input 
            type="range" 
            min="1000" 
            max="100000" 
            step="1000"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="w-24 h-1 bg-border rounded-lg appearance-none cursor-pointer accent-gold"
          />
        </div>
      </div>
      
      <div className="bg-navy p-4 rounded-xl border border-border">
        <div className="text-[10px] text-slate-text uppercase mb-1">সম্ভাব্য মাসিক লাভ</div>
        <div className="text-xl font-bold text-green-500">৳ {monthlyProfit.toLocaleString()}</div>
      </div>
    </section>
  );
}
