import { ShieldCheck, Zap, RefreshCcw, Gift } from "lucide-react";

const features = [
  {
    title: "সরাসরি পেমেন্ট",
    description: "বিকাশ, নগদ বা রকেটের মাধ্যমে সরাসরি অ্যাডমিনের কাছ থেকে পেমেন্ট বুঝে নিন। কোনো থার্ড পার্টি বা এজেন্টের ঝামেলা নেই।",
    icon: Zap,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "শরীয়াহ ভিত্তিক ট্রেডিং",
    description: "আমরা কেবল হালাল এবং উৎপাদনমুখী কোম্পানির শেয়ারে বিনিয়োগ করি। সুদমুক্ত উপার্জনের নিশ্চয়তা।",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "তাৎক্ষণিক উইথড্র",
    description: "আপনার লভ্যাংশ যখন খুশি উত্তোলনের জন্য রিকোয়েস্ট করুন, দ্রুততম সময়ে আপনার ওয়ালেটে টাকা পৌঁছে যাবে।",
    icon: RefreshCcw,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "রেফারেল বোনাস",
    description: "আমাদের প্ল্যাটফর্মে বন্ধুকে আমন্ত্রণ জানান এবং তাদের বিনিয়োগের ওপর সরাসরি ৫% বোনাস উপভোগ করুন।",
    icon: Gift,
    color: "bg-purple-50 text-purple-600"
  }
];

export function Features() {
  return (
    <>
      <section className="bento-card bg-[#064e3b] border-[#10b981]">
        <div className="text-4xl mb-4">🌙</div>
        <h3 className="text-xl font-bold text-[#10b981] mb-2">শরীয়াহ কমপ্লায়েন্স</h3>
        <p className="text-sm text-[#a7f3d0]">সম্পূর্ণ সুদমুক্ত ও উৎপাদনমুখী খাতে বিনিয়োগের নিশ্চয়তা</p>
      </section>

      <section className="bento-card">
        <h3 className="text-lg font-bold text-white mb-4">সরাসরি অ্যাডমিন কন্ট্রোল</h3>
        <p className="text-sm text-slate-text leading-relaxed mb-6">
          কোনো এজেন্ট বা থার্ড পার্টি নেই। আপনার বিনিয়োগ সরাসরি আমাদের অভিজ্ঞ টিম দ্বারা পরিচালিত হয়।
        </p>
        <div className="flex gap-4">
          <div className="flex-1 bg-border/50 p-3 rounded-xl text-center">
            <div className="text-lg font-bold text-white">১০.৫কে+</div>
            <div className="text-[10px] text-slate-text uppercase">সফল মেম্বার</div>
          </div>
          <div className="flex-1 bg-border/50 p-3 rounded-xl text-center">
            <div className="text-lg font-bold text-white">২৪ঘন্টা</div>
            <div className="text-[10px] text-slate-text uppercase">সাপোর্ট</div>
          </div>
        </div>
      </section>

      <section className="bento-card">
        <div className="text-xs font-bold text-slate-text uppercase tracking-widest mb-4">সহজ পেমেন্ট মেথড</div>
        <p className="text-sm text-slate-text mb-4">বিকাশ, নগদ বা রকেটের মাধ্যমে সরাসরি পেমেন্ট বুঝে নিন।</p>
        <div className="flex gap-2 mb-4">
          <span className="bg-border/50 px-3 py-1 rounded-md text-[10px] text-slate-200">bKash</span>
          <span className="bg-border/50 px-3 py-1 rounded-md text-[10px] text-slate-200">Nagad</span>
          <span className="bg-border/50 px-3 py-1 rounded-md text-[10px] text-slate-200">Rocket</span>
        </div>
        <div className="text-xs text-green-400 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          তাৎক্ষণিক উইথড্র সুবিধা
        </div>
      </section>
    </>
  );
}
